import { Embeddings } from "@langchain/core/embeddings";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb"
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_ATLAS_URI || "");
const collection = client
  .db(process.env.MONGODB_ATLAS_DB_NAME)
  .collection(process.env.MONGODB_ATLAS_COLLECTION_NAME || "default_collection_name");

export function createVectoreStore(embeddings: Embeddings){

    const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
        collection: collection,
        indexName: "indexRAG",
        textKey: "text",
        embeddingKey: "embedding",
      });

    return vectorStore
}

