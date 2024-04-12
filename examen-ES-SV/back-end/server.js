const express = require('express');
const cors = require('cors');
const app = express();
const port = 3008;

app.use(cors());

app.get('/api/hola_mundo', (req, res) => {
  res.send('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });