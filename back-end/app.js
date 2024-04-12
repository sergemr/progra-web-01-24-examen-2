const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/hola_mundo', (req, res) => {
  res.send("Esta respuesta del servidor fue exitosa!");
});

app.listen(port, () => {
  console.log(`⁠Corriendo puerto del servidor ${port} `);
});