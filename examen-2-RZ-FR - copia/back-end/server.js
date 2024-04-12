const express = require("express");
const app = express();
const cors = require("cors");
const port = 3008;
 
app.use(cors());
 
app.get("/hola_mundo",(req, res) => {
    res.send("Esta es una prueba de respuesta del servidor, la respuesta es exitosa!");
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});