const HOST = "http://localhost:PREENCHER_AQUI"; // Exemplo: "http://localhost:3001/"
const RESOURCE = "PREENCHER_AQUI";  // path/to/resource
const HTTP_METHOD = "PREENCHER_AQUI";  // POST, PUT, GET, ...

const QUERY_PARAMS = new URLSearchParams({
  startDate: "2023-09-19",
  endDate: "2024-03-17",
});

const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";


// 200 OK
const urlOK = `${HOST}${RESOURCE}?${QUERY_PARAMS}`;
const headersOK = {
  "Authorization": `Bearer ${JWT}`
};
console.log("Linha da Requisição:", HTTP_METHOD, urlOK);
console.log("Cabeçalhos:", headersOK);
const responseOK = await fetch(urlOK, {
  method: HTTP_METHOD,
  headers: headersOK
});

console.log("Resposta:", responseOK.status, responseOK.statusText);
if (responseOK.status !== 200) {
  throw new Error("A resposta HTTP deve ter o status 200");
}

const data = await responseOK.json()

if (!data.length) {
  throw new Error("A resposta deve conter uma lista de produtos");
}
console.log("Produtos a vencer nos próximos 180 dias:");
console.log(data, "\n");

// 400 Bad Request
const badRequestQueryParams = [
  new URLSearchParams({endDate: "2024-03-17"}),
  new URLSearchParams({startDate: "2023-09-19"}),
  new URLSearchParams({dataInicial: "2024-03-17", dataFinal: "2023-09-19"}),
  new URLSearchParams({}),
];
const badRequestHeaders = {
  "Authorization": `Bearer ${JWT}`
};

for (const queryParams of badRequestQueryParams) {
  const urlBadRequest = `${HOST}${RESOURCE}?${queryParams}`;

  console.log("Linha da Requisição:", HTTP_METHOD, urlBadRequest);
  console.log("Cabeçalhos:", badRequestHeaders);
  const responseBadRequest = await fetch(urlBadRequest, {
    method: HTTP_METHOD,
    headers: badRequestHeaders
  });

  console.log("Resposta:", responseBadRequest.status, responseBadRequest.statusText, "\n");
  if (responseBadRequest.status !== 400) {
    throw new Error("A resposta HTTP deve ter o status 400");
  }
}

// 401 Unauthorized
const unauthorizedHeaders = [
  {"Authorization": `${JWT}`},  // Não inicia com Bearer
  {"Authorization": `Basic ${JWT}`},  // Não inicia com Bearer
  {"Authentication": `Bearer ${JWT}`},  // Cabeçalho não é Authorization
  {},  // Não contém cabeçalho Authorization
]
const urlUnauthorized = `${HOST}${RESOURCE}?${QUERY_PARAMS}`;

for (const headers of unauthorizedHeaders) {
  console.log("Linha da Requisição:", HTTP_METHOD, urlUnauthorized);
  console.log("Cabeçalhos:", headers);
  const responseUnauthorized = await fetch(urlUnauthorized, {
    method: HTTP_METHOD,
    headers: headers
  });

  console.log("Resposta:", responseUnauthorized.status, responseUnauthorized.statusText, "\n");
  if (responseUnauthorized.status !== 401) {
    throw new Error("A resposta HTTP deve ter o status 401");
  }
}
