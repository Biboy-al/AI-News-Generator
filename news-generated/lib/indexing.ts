import { CohereEmbeddings } from "@langchain/cohere";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb"
import { MongoClient } from "mongodb";
import { createVectoreStore } from "./db";
import { JSONLoader } from "@langchain/classic/document_loaders/fs/json";



// const newsArticle = "https://www.bbc.com/news/articles/cx2n7k2veywo";

const embeddings = new CohereEmbeddings({
  model: "embed-english-v3.0"
});

const vectorStore = createVectoreStore(embeddings)

export async function loadDataURL(url: string){

  const loader = new CheerioWebBaseLoader(url, {
    selector: "p",
  })  

  const docs = await loader.load()

  const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
  });

const allSplits = await splitter.splitDocuments(docs);

vectorStore.addDocuments(allSplits)

}

export async function loadDataJson(filePath : string){

  const loader = new JSONLoader(
    filePath,
    ["/headline", "/body"]  // Extract headline and body fields
  );

  const docs = await loader.load()

  const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
  });

const allSplits = await splitter.splitDocuments(docs);

vectorStore.addDocuments(allSplits)

}

export async function retriveContext(prompt: string): Promise<string> {

  // Use similaritySearchWithScore to get scores
  const res = await vectorStore.similaritySearchWithScore(prompt, 25); // Get more results to filter

  // Filter results with similarity score >= 0.7 (70%)
  const filteredRes = res.filter(([doc, score]) => score >= 0.07);

  if (filteredRes.length === 0) {
    return "No relevant context found.";
  }

  // Format context with clear separation and scores
  const contextText = filteredRes
    .map(([doc, score], i) => `Source ${i + 1} (Similarity: ${(score * 100).toFixed(1)}%):\n${doc.pageContent}`)
    .join('\n\n---\n\n');

  return contextText;
}