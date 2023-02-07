const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
  });
});

const usuarios = require('./controllers/usuarios');
const produtos = require('./controllers/produtos');
app.use('/usuarios', usuarios);
app.use('/produtos', produtos);

app.listen(3000);
