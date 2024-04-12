const express = require('express');
const cors = require("cors");
const app = express();

//define constantes, permite solicitudes, 
const corsOptions = {   origin: 'http://mi-front-end.com',   methods: ['GET', 'POST'],   allowedHeaders: ['Content-Type', 'Authorization'], };
 
//todas las solicitudes sean aceptadas
app.use(cors());

//analiza las solicitudes json
app.use(express.json());

//define puerto
const PORT = 3001;
 
//define endpoint
app.get('/hola_mundo', (req, res) => {
  res.send('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
});

//imprime mensaje indicando el estado del servidor y en que puerto esta escucahndo
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });