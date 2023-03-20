const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello flutter guys !");
});

app.listen(port, () => {
  console.log(`server is runing on port ${port}!`);
});
