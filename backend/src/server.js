const express = require("express");

const app = express();

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição e delete)
// req.body = acessar corpo da requisição. (criação e edição de registros)

app.use(express.json());

app.post("/users", (req, res) => {
  return res.json(req.body);
});

app.listen(3333);
