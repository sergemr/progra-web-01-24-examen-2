
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3002;

app.use(cors());

app.get('/Hola_Mundo', (req, res) => {
    res.send('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



/*
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3008;

app.use(cors());
app.use(express.json());

const respuestaServidor = {
  mensaje: "Esta es una prueba de respuesta del servidor, la respuesta es exitosa!"
};

app.get("/hola_mundo", (req, res) => {
  res.send("Esta es una prueba de respuesta del servidor, la respuesta es exitosa!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
*/