const express = require("express");
const app = express();
const cors = require("cors");
const port = 3008;

app.use(express.json());
app.use(cors());

app.get("/hola-mundo", (req, res) => {
    res.send("Esta es una prueba del servidor, la respuesta es exitosa!");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
//nodemon servidor.js

//node servidor.js