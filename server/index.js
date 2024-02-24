const express = require("express");

const app = express();
const port = 7777;

app.get("/", (req, res) => {
  res.send("I am Live !!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});