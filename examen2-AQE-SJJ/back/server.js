const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/hola_mundo', (req, res) => {
  res.send("Esta es una prueba de respuesta del servidor, la respuesta es exitosa!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
