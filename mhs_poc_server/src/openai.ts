import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

/**
 * Gets answer to users question from OpenAI chat completions API
 * 
 * @param context Relevant paragraphs from search results
 * @param question Question to which to answer
 * @param model GPT model to use
 * @param lang Language
 * @returns Generated answer
 */
export async function getAnswer(context: string, question: string, model: string, lang: string): Promise<OpenAI.Chat.ChatCompletion.Choice[]> {
  const res = await openai.chat.completions.create({
    messages: [
      {role: "system", content: lang === "sv" ? "Du svarar på frågor om skogsvårdsrekommendationer." : "Vastaat kysymyksiin metsänhoidonsuosituksista."},
      {role: "user", content: getUserPrompt(question, context, lang)}
    ],
    model: model,
    temperature: 0
  });
  return res.choices;
}

/**
 * Formats user prompt with given language
 * 
 * @param question Question from user
 * @param context Context from search results
 * @param lang Language
 * @returns Generated answer
 */
function getUserPrompt(question: string, context: string, lang: string) {
  if (lang == "sv") {
    return `Skriv en kort artikel som svarar på följande fråga utifrån texten nedan. Om du inte hittar svaret i texten, svara "Jag vet inte"

    Fråga:
    ${question}
  
    Text:
    ${context}
    `;
  }

  return `Kirjoita lyhyt artikkeli, joka vastaa seuraavaan kysymykseen alla olevan tekstin perusteella. Mikäli tekstistä ei löydy vastausta, vastaa "En tiedä"

  Kysymys:
  ${question}

  Teksti:
  ${context}
  `;
}