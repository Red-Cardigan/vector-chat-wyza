// import fs from 'fs-extra';
// import path from 'path';
// import dotenv from 'dotenv';
// import { PineconeClient } from '@pinecone-database/pinecone';
// import { PineconeStore } from '@langchain/pinecone';
// import { OpenAIEmbeddings } from '@langchain/openai';

// // Load environment variables
// dotenv.config();

// interface DocumentMetadata {
//   url: string;
//   title: string;
//   filename: string;
// }

// // Custom text splitter function
// function splitText(text: string, chunkSize: number, chunkOverlap: number): string[] {
//   const chunks = [];
//   for (let start = 0; start < text.length; start += chunkSize - chunkOverlap) {
//     const end = Math.min(start + chunkSize, text.length);
//     chunks.push(text.substring(start, end));
//   }
//   return chunks;
// }

// const run = async () => {
//   try {
//     // Initialize Pinecone client
//     const pinecone = new PineconeClient();
//     const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);

//     // Load metadata from JSON
//     const metadataPath = path.join(__dirname, 'metadata.json');
//     const metadata: Record<string, DocumentMetadata> = await fs.readJson(metadataPath);

//     // Directory where the .txt files are located
//     const directoryPath = path.join(__dirname, '../docs/scraped_txt');

//     // Read all text files from directory
//     const files = await fs.readdir(directoryPath);

//     // Initialize embeddings and PineconeStore
//     const embeddings = new OpenAIEmbeddings({
//       modelName: "text-embedding-3-small", // Adjust model name as necessary
//     });

//     let documents: any[] = [];

//     for (const file of files) {
//       const filePath = path.join(directoryPath, file);
//       const pageContent = await fs.readFile(filePath, 'utf8');
//       const docMetadata = Object.values(metadata).find((meta) => meta.filename === file);

//       // Split the document content into chunks
//       const textChunks = splitText(pageContent, 1000, 200);

//       textChunks.forEach((chunk) => {
//         documents.push({
//           metadata: docMetadata ? { url: docMetadata.url, title: docMetadata.title } : {},
//           pageContent: chunk,
//         });
//       });
//     }

//     // Ingest documents into Pinecone
//     await PineconeStore.fromDocuments(documents, embeddings, {
//       pineconeIndex,
//       maxConcurrency: 5, // Adjust concurrency as necessary
//     });

//     console.log('Ingestion complete');
//   } catch (error) {
//     console.error('Failed to ingest documents', error);
//   }
// };

// run();