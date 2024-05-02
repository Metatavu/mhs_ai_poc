import { ArticleApi, ArticlesGetLangcodeEnum, DescriptionOfOperationApi, ParagraphApi } from "./generated/client/index.js";
export async function getParagraphsForIndexing(articlesFrom, articlesMax, lang) {
    const api = new ArticleApi();
    const langcode = lang == "sv" ? ArticlesGetLangcodeEnum.Sv : ArticlesGetLangcodeEnum.Fi;
    const articleIds = (await api.articlesGet({ from: articlesFrom, size: articlesMax, langcode }))
        .map(a => a.id);
    if (!articleIds || !articleIds.length) {
        console.log(`No articles found. from: ${articlesFrom} max: ${articlesMax}`);
        return [];
    }
    const articles = await api.articlesIdGet({ id: articleIds, langcode });
    let res = [];
    const paragraphApi = new ParagraphApi();
    for (let i = 0; i < articles.length; i++) {
        res.push((await paragraphApi.paragraphsIdGet({ id: articles[i].paragraphs, langcode }))
            .filter(p => p.type == "formatted_text")
            .map(p => {
            return {
                id: `${p.id}-${lang}`,
                articleId: articles[i].id,
                articleUrl: articles[i].url,
                articleTitle: articles[i].title,
                content: p.text.html
            };
        }));
    }
    return res.flat();
}
export async function getOperationDesctiptionForIndexing(from, max, lang) {
    const api = new DescriptionOfOperationApi();
    const langcode = lang == "sv" ? ArticlesGetLangcodeEnum.Sv : ArticlesGetLangcodeEnum.Fi;
    const descIds = (await api.operationDescriptionsGet({ from: from, size: max, langcode }))
        .map(a => a.id);
    if (!descIds || !descIds.length) {
        console.log(`No operation descriptions found. from: ${from} max: ${max}`);
        return [];
    }
    const operationDescriptions = await api.operationDescriptionsIdGet({ id: descIds, langcode });
    let res = [];
    const paragraphApi = new ParagraphApi();
    for (let i = 0; i < operationDescriptions.length; i++) {
        let pIds = operationDescriptions[i].paragraphs;
        if (!pIds || !pIds.length) {
            continue;
        }
        res.push((await paragraphApi.paragraphsIdGet({ id: pIds, langcode }))
            .filter(p => p.type == "formatted_text")
            .map(p => {
            return {
                id: `${p.id}-${lang}-op`,
                articleId: operationDescriptions[i].id,
                articleUrl: operationDescriptions[i].url,
                articleTitle: operationDescriptions[i].title,
                content: p.text.html
            };
        }));
    }
    return res.flat();
}
