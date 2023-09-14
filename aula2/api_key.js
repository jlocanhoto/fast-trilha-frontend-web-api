import express from "express";

const app = express();
const port = 3001;

const genAPIKey = () => {
  return [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join('');
};

// const API_KEY = genAPIKey();
const API_KEY = '3vprcl9mrtpr7zzqtz0hzbda9b0pea';

app.get('/', (req, res) => {
  if (req.headers['x-api-key'] !== API_KEY) {
    return res.status(401).send('API Key not recognized!');
  }

  res.status(200).send('Authenticated!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
