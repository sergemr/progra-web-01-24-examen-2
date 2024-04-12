import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const App = () => {
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:3008/hola_mundo");
      setResponse(res.data.mensaje);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse("Error fetching data");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "black" }}>
      <Button variant="contained" style={{ backgroundColor: "blue", color: "white" }} onClick={handleClick}>
        Obtener Mensaje del Servidor
      </Button>
      <div style={{ textAlign: "center", color: "white", marginTop: "20px" }}>{response}</div>
    </div>
  );
};

export default App;