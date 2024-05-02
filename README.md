# MHS AI PoC

### Installation

Install NodeJS and npm. Atleast version NodeJS 20.6.0 is required.

Navigate to mhc_poc_server folder and install dependencies.

```
npm install
```

### Running

Create file .env to mhs_poc_server folder with following contents:

```
OPENAI_API_KEY={Your OpenAI api key}
ELASTIC_USER={Your Elasticsearch username}
ELASTIC_PASSWORD={Your Elasticsearch password}
ELASTIC_URL={Your Elasticsearch url}
```

Instead of ELASTIC_USER and ELASTIC_PASSWORD, you can provide value for ELASTIC_APIKEY if you are using Elasticsearch cloud service.


Navigate to mhs_poc_server folder and run command
```
npm run start-local
```

Your server should now be running at port 3000. You can verify this by navigating to localhost:3000
However, no content is yet indexed.


### Indexing content


PoC currently support indexing articles and operation descriptions from MHS Api.

Navigate to these local addresses in order to index some content in finnish and swedist.
Console should display the indexing process after navigating to each address.

- http://localhost:3000/operationdescriptions/index/0/100/fi
- http://localhost:3000/articles/index/0/100/fi

- http://localhost:3000/operationdescriptions/index/0/100/sv
- http://localhost:3000/articles/index/0/100/sv