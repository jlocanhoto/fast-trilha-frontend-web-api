import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.send([
    {"name": "Paulo", "age": 30, "salary": 1320},
    {"name": "Marcus", "age": 35, "salary": 2500},
    {"name": "Alex", "age": 28, "salary": 1500},
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
