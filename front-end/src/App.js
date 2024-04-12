import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3002/Hola_Mundo');
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Error fetching data');
    }
  };

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "black" }} >
      <Button variant="contained" style={{ backgroundColor: "blue", color: "white" }} onClick={fetchData}>
        Menjaje del Servidor
      </Button>
      {message && <div style={{ textAlign: "center", color: "white", marginTop: "20px" }}>{message}</div>}
    </div>
  );

};
export default App;
/*import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

const App = () => {
  const [response, setResponse] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3002/hola_mundo");
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  */
  /*
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "black" }}>
      <Button variant="contained" style={{ backgroundColor: "blue", color: "white" }} onClick={fetchData}>
        Obtener Mensaje del Servidor 
      </Button>
      {response && <p style={{ textAlign: "center", color: "white", marginTop: "20px" }}>{response.mensaje}</p>}
    </div>
  );
  */

/*
import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3002/Hola_Mundo');
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Error fetching data');
    }
  };

  return (
    <div className="App">
      <Button variant="contained" onClick={fetchData}>
        Hola Mundo!
      </Button>
      {message && <div style={{ marginTop: '20px' }}>{message}</div>}
    </div>
  );
}
*/

