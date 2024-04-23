// There seems to be an issue with the Pinecone client. 
// There's a discrepancy between the expected type for the pineconeIndex parameter in PineconeStore.fromDocuments and the type returned by PineconeClient.Index()
// Suggestion: Rewrite in python and run from a notebook, since the documentation seems to be better maintained there.

// import fs from 'fs';
// import path from 'path';
// import { PineconeClient } from '@pinecone-database/pinecone';
// import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
// import { PineconeStore } from "@langchain/pinecone";
// import { PDFLoader } from 'langchain/document_loaders/fs/pdf'; // Import PDFLoader
// import dotenv from 'dotenv';

// dotenv.config();

// const pdfPath = '../../docs/data/scraped_pdfs'; // Updated path for PDFs

// interface SimpleDocument {
//   pageContent: string;
//   metadata: Record<string, any>;
// }

// const loadMetadata = (filePath: string): Record<string, any> => {
//   try {
//     const rawData = fs.readFileSync(filePath);
//     return JSON.parse(rawData.toString());
//   } catch (error) {
//     console.error(`Failed to load metadata from ${filePath}`, error);
//     return {};
//   }
// };

// const metadata1 = loadMetadata('scripts/metadata.json');

// export const run = async () => {
//   try {
//     const files = fs.readdirSync(pdfPath).filter(file => file.endsWith('.pdf'));
//     let docs: SimpleDocument[] = [];
//     let homelessFilenames: string[] = [];

//     for (const file of files) {
//       const loader = new PDFLoader(path.join(pdfPath, file), {
//         splitPages: false, // Set to true if you want one document per page
//       });

//       const docPages = await loader.load();
//       const baseFilename = path.basename(file, '.pdf');
//       let docUrl = '';

//       console.log(`Looking for URL with filename: ${baseFilename}`);
//       for (const [url, meta] of Object.entries({...metadata1 })) {
//         if (meta.filename === baseFilename) {
//           docUrl = url;
//           console.log(`Match found: ${docUrl}`);
//           break;
//         }
//       }

//       if (!docUrl) {
//         console.warn(`No URL found for document: ${baseFilename}`);
//         homelessFilenames.push(baseFilename);
//         continue;
//       }

//       // Assuming each PDF is a single document, adjust as needed for splitPages
//       docs.push({
//         pageContent: docPages.map(page => page.pageContent).join('\n'), // Join pages if splitPages is true
//         metadata: {
//           source: file,
//           url: docUrl,
//         },
//       });
//     }

//     fs.writeFileSync('homeless.txt', homelessFilenames.join('\n'));
//     console.log('Homeless filenames written to homeless.txt');

//     const embeddings = new OpenAIEmbeddings({
//       modelName: "text-embedding-3-small",
//     });

//     const pinecone = new PineconeClient();
//     const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);

//     await PineconeStore.fromDocuments(docs, embeddings, {
//       pineconeIndex,
//       maxConcurrency: 5,
//     });
//   } catch (error) {
//     console.error('error', error);
//     throw new Error('Failed to ingest PDF data');
//   }
// };

// (async () => {
//   await run();
//   console.log('PDF ingestion complete');
// })();