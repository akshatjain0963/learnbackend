const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hellllo World!");
});
app.get("/test", (req, res) => {
  res.send("<h1>This is test page</h1>");
});
console.log("checking");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
