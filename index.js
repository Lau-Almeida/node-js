const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("olá mundo! Olá Mundooo");
});

app.listen(8081, function() {
  console.log("servidor rodando na porta 8081");
});