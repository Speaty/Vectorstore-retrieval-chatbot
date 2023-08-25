# Vectorstore retrieval chatbot

## Setup
### Backend
- Create two new directories in Backend `/knowledge_base` & `/logs` 
- Create a new python environment in Backend `python -m venv .`
- Open new venv to install dependences `pip install flask openai pinecone-client langchain lark tiktoken flask-cors pypdf`
- Add .pdf files to `/knowledge_base`
- run `python server.py`

### Frontend
- Download node.js if you do not have it already
- run `npm install` from the frontend directory to install dependencies
- run `npm run build` to build the project
- run `npm start` to run the project



### TO DO
- uploaded.txt needs to be in logs
- Backend initialisation can take a long time depending on how many files are being uploaded
- 

