const express = require("express");
const app = express();
const port = 101;

// app.use(bodyParser.json());

// //support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello flutter and marketing  guys !");
});


app.listen(port, () => {
  console.log(`server is runing on port ${port}!`);
});
