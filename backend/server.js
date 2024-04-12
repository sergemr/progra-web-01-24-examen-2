const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3009; 

app.use(cors());

// Endpoint "hola_mundo" que responde a una solicitud GET
app.get('/hola_mundo', (req, res) => {
  res.send('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
