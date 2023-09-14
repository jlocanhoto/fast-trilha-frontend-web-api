import express from "express";

const app = express();
const port = 3001;

// Completar a resposta abaixo com o status line indicando erro 400 Bad Request
// Considerar que esse servidor vai responder uma requisição HTTP 1.1
const RAW_RESPONSE = `
SUBSTITUIR_ESSE_TEXTO_COM_O_RESPONSE_STATUS_LINE
Date: Sun, 10 Oct 2010 23:26:07 GMT
Content-Type: text/html
Content-Length: 26

Missing query param 'date'
`;

app.get('/', (req, res) => {
  res.socket.end(RAW_RESPONSE);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
