const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/hola_mundo', (req, res) => {
  res.send('Ésta es una prueba de respuesta del servidor, la respuesta es exitosa!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});