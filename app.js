const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db');

app.use(bodyParser.json());

const usuarios = require('./controllers/usuarios');
app.use('/usuarios', usuarios);

app.listen(3000);
