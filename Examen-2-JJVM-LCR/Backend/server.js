const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; 


app.use(cors());


app.get('/hola_mundo', (req, res) => {
   
    res.send('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); 
 });

