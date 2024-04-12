const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/hola_mundo', (req, res) => {
  res.send("Esta es una prueba de respuesta del servidor exitosa!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});