import { ArticleApi, ArticlesGetLangcodeEnum, DescriptionOfOperationApi, ParagraphApi } from "./generated/client/index.js";
import { DocIndexRequest } from "./elastic.js";

export async function getParagraphsForIndexing(articlesFrom: number, articlesMax: number, lang: string): Promise<DocIndexRequest[]> {
  const api = new ArticleApi();
  const langcode = lang == "sv" ? ArticlesGetLangcodeEnum.Sv : ArticlesGetLangcodeEnum.Fi
  const articleIds = (await api.articlesGet({from: articlesFrom, size: articlesMax, langcode }))
    .map(a => a.id);

  if (!articleIds || !articleIds.length) {
    console.log(`No articles found. from: ${articlesFrom} max: ${articlesMax}`);
    return [];
  }
  const articles = await api.articlesIdGet({id: articleIds, langcode });

  let res = [];
  const paragraphApi = new ParagraphApi();

  for (let i = 0; i < articles.length; i++) {
    res.push((await paragraphApi.paragraphsIdGet({id: articles[i].paragraphs, langcode }))
      .filter(p => p.type == "formatted_text")
      .map(p => {
        return {
          id: `${p.id}-${lang}`,
          articleId: articles[i].id,
          articleUrl: articles[i].url,
          articleTitle: articles[i].title,
          content: (p as any).text.html
        }
      }))
  }

  return res.flat();
}


export async function getOperationDesctiptionForIndexing(from: number, max: number, lang: string): Promise<DocIndexRequest[]> {
  const api = new DescriptionOfOperationApi();
  const langcode = lang == "sv" ? ArticlesGetLangcodeEnum.Sv : ArticlesGetLangcodeEnum.Fi
  const descIds = (await api.operationDescriptionsGet({from: from, size: max, langcode }))
    .map(a => (a as any).id);

  if (!descIds || !descIds.length) {
    console.log(`No operation descriptions found. from: ${from} max: ${max}`);
    return [];
  }

  const operationDescriptions = await api.operationDescriptionsIdGet({id: descIds, langcode });
  
  let res = [];
  const paragraphApi = new ParagraphApi();

  for (let i = 0; i < operationDescriptions.length; i++) {
    let pIds = (operationDescriptions[i] as any).paragraphs;
    if (!pIds || !pIds.length) {
      continue;
    }
    res.push((await paragraphApi.paragraphsIdGet({id: pIds, langcode }))
      .filter(p => p.type == "formatted_text")
      .map(p => {
        return {
          id: `${p.id}-${lang}-op`,
          articleId: (operationDescriptions[i] as any).id,
          articleUrl: operationDescriptions[i].url,
          articleTitle: (operationDescriptions[i] as any).title,
          content: (p as any).text.html
        }
      }))
  }

  return res.flat();
}