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