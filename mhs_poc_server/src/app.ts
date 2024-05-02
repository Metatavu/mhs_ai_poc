import express, { Request } from 'express';
import { getOperationDesctiptionForIndexing, getParagraphsForIndexing } from "./mhs-api.js";
import { index, knnSearch, prepareIndex } from './elastic.js';
import { getAnswer } from './openai.js';

const port = process.env['PORT'] ? parseInt(process.env['PORT']) : 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/articles/index/:from/:max/:lang', async (req: Request<{ from: number, max: number, lang: string }>, res) => {
  const paragraphs = await getParagraphsForIndexing(req.params.from, req.params.max, req.params.lang);
  console.log(paragraphs);
  console.log(`Starting indexing of ${paragraphs.length} article paragraphs`);
  await prepareIndex();
  for (let i = 0; i < paragraphs.length; i++) {
    console.log(`Indexing paragraph ${i+1} / ${paragraphs.length}`); 
    await index(paragraphs[i], req.params.lang);
  }
  res.send('OK');
});

app.get('/operationdescriptions/index/:from/:max/:lang', async (req: Request<{ from: number, max: number, lang: string }>, res) => {
  const paragraphs = await getOperationDesctiptionForIndexing(req.params.from, req.params.max, req.params.lang);
  console.log(paragraphs);
  console.log(`Starting indexing of ${paragraphs.length} operation description paragraphs`);
  await prepareIndex();
  for (let i = 0; i < paragraphs.length; i++) {
    console.log(`Indexing paragraph ${i+1} / ${paragraphs.length}`); 
    await index(paragraphs[i], req.params.lang);
  }
  res.send('OK');
});

app.post('/articles/search', async (req: Request<any, any, {query: string, lang: string}>, res) => {
  console.log(req.body);
  const body = req.body;
  const data = await knnSearch(body.query, body.lang);
  res.send(data);
});

app.post('/articles/answer', async (req: Request<any, any, {query: string, accuracy: number, lang: string, model: string}>, res) => {
  const body = req.body;
  const data = await knnSearch(body.query, body.lang);
  const accurateHits = data.hits.filter(hit => hit._score >= body.accuracy);
  if (!accurateHits.length) {
    res.send({error: 'No accurate hits found, try lowering the accuracy parameter and try again.'});
    return;
  }
  const nOfHits = Math.min(accurateHits.length, 5);
  let context = [];
  for (let i = 0; i < nOfHits; i++) {
    console.log(`Adding context with score: ${accurateHits[i]._score}`);
    context.push((accurateHits[i]._source as any));
  }
  console.log(`Selected ${context.length} paragraphs as context`);
  const answer = await getAnswer(context.map(c => c.content).join("\n"), body.query, body.model, body.lang);
  res.send({ answer, sources: context });
});

app.listen(port, () => console.log("Server Running"));