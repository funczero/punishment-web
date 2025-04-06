require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let botSettings = {
  prefix: process.env.BOT_PREFIX,
  token: process.env.BOT_TOKEN,
};

app.get('/settings', (req, res) => {
  res.json(botSettings);
});

app.post('/settings', (req, res) => {
  botSettings = { ...botSettings, ...req.body };
  res.json({ message: 'Configurações atualizadas com sucesso!' });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});