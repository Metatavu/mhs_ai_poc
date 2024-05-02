import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

interface SourceItem {
  title: string,
  url: string,
  content: string
}

export default function Home() {

  const [action, setAction] = useState("search");
  const [model, setModel] = useState("gpt-4-turbo");
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("fi");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<SourceItem[]>([]);

  function sendRequest() {
    setLoading(true);
    setSources([]);
    setAnswer("");
    const url = action === "search" ? "articles/search" : "articles/answer";
    let body: any = {
      query: query,
      lang: lang
    }
    if (action === "answer") {
      body["accuracy"] = 1;
      body["model"] = model;
    }
    fetch(url, {
      headers: new Headers({'content-type': 'application/json'}),
      method: "POST",
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      if (action == "answer") {
        setAnswer(data.answer[0].message.content);
        setSources(data.sources.map((hit: any) => {
          return {
            title: hit.articleTitle,
            content: hit.content,
            url: hit.articleUrl,
          }
        }));
      } else {
        setSources(data.hits.map((hit: any) => {
          return {
            title: hit._source.articleTitle,
            content: hit._source.content,
            url: hit._source.articleUrl,
          }
        }));
      }

    })
    .finally(() => setLoading(false));
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="flex flex-row">
        <div className="flex flex-col">
          <label htmlFor="action-input">Toiminto: </label>
          { action === "answer" && <label htmlFor="model-input">GPT-malli: </label> }
          <label htmlFor="lang-input">Kieli: </label>
          <label htmlFor="query-input">Hae / kysy: </label>
        </div>
        <div className="flex flex-col">
          <select id="action-input" value={action} onChange={e => setAction(e.target.value)}>
            <option value="search">Haku</option>
            <option value="answer">Vastaus</option>
          </select>
          { action === "answer" && 
          <select id="model-input" value={model} onChange={e => setModel(e.target.value)}>
            <option value="gpt-4-turbo">gpt-4-turbo</option>
            <option value="gpt-4">gpt-4</option>
            <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
          </select> }
          <select id="lang-input" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="fi">Suomi</option>
            <option value="sv">Ruotsi</option>
          </select>
          <input id="query-input" value={query} onChange={e => setQuery(e.target.value)} type="text" />
        </div>
      </div>
      { !loading && 
      <div className="flex flex-row">
        <button onClick={() => sendRequest()}>Lähetä</button>
      </div> 
      }
      { loading && 
      <div className="flex flex-row">
        <p>Ladataan...</p>
      </div> 
      }
      { answer.length > 0 && 
      <div className="flex flex-col">
        <pre>{answer}</pre>
      </div> 
      }
      <div className="flex flex-col">
        {sources.map((source, index) => {
          return (
            <div className="result-container" key={index}>
              <div>
                <a href={source.url}>
                  <h4 className="result-title">{source.title}</h4>
                </a>
              </div>
              <div dangerouslySetInnerHTML={{__html: source.content}}></div>
            </div>
          );
        })}
      </div> 
    </main>
  );
}
