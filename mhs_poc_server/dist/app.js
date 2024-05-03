import express from 'express';
import { getOperationDesctiptionForIndexing, getParagraphsForIndexing } from "./mhs-api.js";
import { index, knnSearch, prepareIndex } from './elastic.js';
import { getAnswer } from './openai.js';
let answerCache = {};
const port = process.env['PORT'] ? parseInt(process.env['PORT']) : 3000;
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.get('/articles/index/:from/:max/:lang', async (req, res) => {
    const paragraphs = await getParagraphsForIndexing(req.params.from, req.params.max, req.params.lang);
    console.log(paragraphs);
    console.log(`Starting indexing of ${paragraphs.length} article paragraphs`);
    await prepareIndex();
    for (let i = 0; i < paragraphs.length; i++) {
        console.log(`Indexing paragraph ${i + 1} / ${paragraphs.length}`);
        await index(paragraphs[i], req.params.lang);
    }
    res.send('OK');
});
app.get('/operationdescriptions/index/:from/:max/:lang', async (req, res) => {
    const paragraphs = await getOperationDesctiptionForIndexing(req.params.from, req.params.max, req.params.lang);
    console.log(paragraphs);
    console.log(`Starting indexing of ${paragraphs.length} operation description paragraphs`);
    await prepareIndex();
    for (let i = 0; i < paragraphs.length; i++) {
        console.log(`Indexing paragraph ${i + 1} / ${paragraphs.length}`);
        await index(paragraphs[i], req.params.lang);
    }
    res.send('OK');
});
app.post('/articles/search', async (req, res) => {
    console.log(req.body);
    const body = req.body;
    const data = await knnSearch(body.query, body.lang);
    res.send(data);
});
app.post('/articles/answer', async (req, res) => {
    const body = req.body;
    const data = await knnSearch(body.query, body.lang);
    const accurateHits = data.hits.filter(hit => hit._score >= body.accuracy);
    if (!accurateHits.length) {
        res.send({ error: 'No accurate hits found, try lowering the accuracy parameter and try again.' });
        return;
    }
    const nOfHits = Math.min(accurateHits.length, 5);
    let context = [];
    for (let i = 0; i < nOfHits; i++) {
        console.log(`Adding context with score: ${accurateHits[i]._score}`);
        context.push({ _score: accurateHits[i]._score, ...accurateHits[i]._source });
    }
    console.log(`Selected ${context.length} paragraphs as context`);
    const queryToken = Buffer.from(JSON.stringify({ query: body.query, accuracy: body.accuracy, lang: body.lang, model: body.model })).toString("base64");
    res.send({ status: 'PENDING', token: queryToken });
    const answer = await getAnswer(context.map(c => c.content).join("\n"), body.query, body.model, body.lang);
    answerCache[queryToken] = { answer, sources: context };
});
app.get('/articles/answerstatus/:query', async (req, res) => {
    if (answerCache[req.params.query]) {
        res.send(answerCache[req.params.query]);
        delete answerCache[req.params.query];
    }
    else {
        res.send({ status: "PENDING" });
    }
});
app.listen(port, () => console.log("Server Running"));
