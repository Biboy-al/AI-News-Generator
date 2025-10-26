import { CohereEmbeddings } from "@langchain/cohere";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb"
import { MongoClient } from "mongodb";
import { createVectoreStore } from "./db";



const newsArticle = "https://www.bbc.com/news/articles/cx2n7k2veywo";

const loader = new CheerioWebBaseLoader(newsArticle, {
    selector: "p",
})

const docs = await loader.load()

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
});

const allSplits = await splitter.splitDocuments(docs);

const embeddings = new CohereEmbeddings({
  model: "embed-english-v3.0"
});

export const vectorStore = createVectoreStore(embeddings)

export async function retriveContext(prompt: string): Promise<string> {

  const res = await vectorStore.similaritySearch("president", 2);

  console.log(res)

  if (res.length === 0) {
    return "No relevant context found.";
  }

  // Format context with clear separation
  const contextText = res
    .map((doc, i) => `Source ${i + 1}:\n${doc.pageContent}`)
    .join('\n\n---\n\n');

  return contextText;
}