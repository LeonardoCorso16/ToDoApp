const express = require('express');
const app = express();
const bd = require('./infra/sqlite-db.js');
const cors = require('cors');
const usuarioController = require ('./Controllers/usuario-controller.js');
const tarefaController = require('./Controllers/tarefa-controller.js');

usuarioController(app, bd);
tarefaController(app, bd);
app.use(express.json()) ;
app.use(cors());

const port = 3000

app.listen(port, () => {
    console.log(`Acessa ai parça http://localhost:${port}`);
  })