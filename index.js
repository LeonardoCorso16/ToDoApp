const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bd = require('./infra/sqlite-db.js');
const cors = require('cors');
const usuarioController = require ('./Controllers/usuario-controller.js');
const deverController = require('./Controllers/dever-controller.js');

usuarioController(app, bd);
deverController(app, bd);
app.use(express.json()) ;
app.use(cors());
app.use(bodyParser.json());

const port = 3000

app.listen(port, () => {
    console.log(`Acessa ai parça http://localhost:${port}`);
  })