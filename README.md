# PDF Chatbot with LangChain, Pinecone, and Next.js

This project integrates functionalities from two powerful setups: a GPT-4 based chatbot for handling large PDF files and a multi-user chat environment. Leveraging LangChain and Pinecone for managing AI and vector data storage, alongside Next.js for the frontend, this solution offers an efficient way to query and interact with content extracted from PDFs in a multi-user setting.

## Features

- **PDF Embeddings**: Utilize Pinecone to store and retrieve text embeddings of multiple large PDF files, making it easy to search and reference documents.
- **Chat Interface**: Build a scalable chatbot using GPT-4, allowing users to ask questions and get relevant answers extracted from the PDF contents.

## Technologies

- **LangChain**: Aids in building scalable AI and LLM applications.
- **Pinecone**: A vector database perfect for storing embeddings and facilitating fast retrieval.
- **Next.js**: A React framework for building user interfaces.
- **OpenAI GPT-4**: Powers the conversational AI capabilities.
- **Supabase**: Provides backend and database management as a service.

## Visual Guide and Support

For a detailed visual guide on setting up and running this project, refer to the visual guide folder within the repository. If you encounter any issues or have questions, you can join the project-specific Discord community or check the issues and discussions sections of the GitHub repository.

## Troubleshooting

Common issues might relate to API key configuration, Node.js versions, PDF file integrity, and Pinecone settings. For troubleshooting:

- Ensure all environment variables are set correctly as per `.env` file instructions.
- Verify the Node.js version is compatible.
- Check Pinecone settings for correct environment and index configurations.

## Acknowledgements

The frontend integration concepts were inspired by `langchain-chat-nextjs`.
Backend setup and multi-user functionality guidance provided by Roie Schwaber-Cohen from Pinecone. For additional insights into the multi-user functionality, see *Building a Multi-User Chatbot with Langchain and Pinecone in Next.JS*.

This project combines robust backend management with advanced AI capabilities to provide a unique and efficient solution for managing and interacting with PDF documents in a user-friendly chat interface.