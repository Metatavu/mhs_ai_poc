import { Client } from '@elastic/elasticsearch';
const client = process.env['ELASTIC_APIKEY'] ?
    new Client({
        node: process.env['ELASTIC_URL'],
        auth: {
            apiKey: process.env['ELASTIC_APIKEY'],
        },
        tls: {
            rejectUnauthorized: false
        }
    }) : new Client({
    node: process.env['ELASTIC_URL'],
    auth: {
        username: process.env['ELASTIC_USER'],
        password: process.env['ELASTIC_PASSWORD']
    },
    tls: {
        rejectUnauthorized: false
    }
});
/**
 * Prepares index with correct mappings, inference processor and ingest pipeline
 */
export async function prepareIndex() {
    const indexExists = await client.indices.exists({ index: "mhs_docs" });
    if (!indexExists) {
        await createIndex();
    }
    let pipelineExists = null;
    try {
        pipelineExists = await client.ingest.getPipeline({ id: "content_embedding" });
    }
    catch (e) { }
    if (!pipelineExists) {
        await configureIngestPipeline(process.env['OPENAI_API_KEY'], "text-embedding-3-small");
    }
}
/**
 * Performs k-NN search filtered with language
 *
 * @param query Query from user
 * @param lang Language
 * @returns Nearest results filtered by language
 */
export async function knnSearch(query, lang) {
    const res = await client.search({
        index: "mhs_docs",
        query: {
            bool: {
                filter: [
                    { term: { lang: lang } }
                ]
            }
        },
        knn: {
            field: "contentVector",
            k: 5,
            num_candidates: 100,
            query_vector_builder: {
                text_embedding: {
                    model_id: "openai_embeddings",
                    model_text: query
                }
            }
        }
    });
    return res.hits;
}
/**
 * Indexes document with given language
 *
 * @param req Document indexing request
 * @param lang Language
 */
export async function index(req, lang) {
    client.index({
        pipeline: "content_embedding",
        index: "mhs_docs",
        id: req.id,
        document: {
            articleId: req.articleId,
            content: req.content,
            articleTitle: req.articleTitle,
            articleUrl: req.articleUrl,
            lang: lang
        }
    });
}
/**
 * Creates index with proper mappings
 */
async function createIndex() {
    await client.indices.create({
        index: "mhs_docs",
        mappings: {
            properties: {
                articleId: {
                    type: "keyword"
                },
                articleTitle: {
                    type: "keyword"
                },
                articleUrl: {
                    type: "keyword"
                },
                lang: {
                    type: "keyword"
                },
                content: {
                    type: "text"
                },
                contentVector: {
                    type: "dense_vector",
                    dims: 1536
                },
            }
        }
    });
}
/**
 * Creates and configures inference processor and ingest pipeline
 *
 * @param apiKey OpenAI api key in order to configure inference processor
 * @param modelId OpenAI Embedding model to use
 */
async function configureIngestPipeline(apiKey, modelId) {
    await client.inference.putModel({
        inference_id: "openai_embeddings",
        task_type: "text_embedding",
        model_config: {
            service: "openai",
            task_settings: {},
            service_settings: {
                api_key: apiKey,
                model_id: modelId
            }
        }
    });
    const processor = {
        model_id: "openai_embeddings",
        input_output: {
            input_field: "content",
            output_field: "contentVector"
        }
    };
    await client.ingest.putPipeline({
        id: "content_embedding",
        processors: [
            {
                inference: processor
            }
        ]
    });
}
