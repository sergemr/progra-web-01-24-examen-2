const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3009;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/hola_mundo', (req, res) => {
    res.send("Esta es una prueba de respuesta del servidor, la respuesta es exitosa!");
});

app.post('/hola_mundo', (req, res) => {
    
    res.status(200).send('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});