

import './App.css';
import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';



function App() {
  
  // funcion para traer ls informacion del back
  function traerInfomacionBack(){
    const url ='http://localhost:3001/hola_mundo';
    //funcion axios
    axios.get(url)
      .then((res) => {
        setRespuestaBack(res.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos del BackEnd: ', error);

      });

  };



//VSariable respuesta
  const[respuestaBack, setRespuestaBack] = useState([]);
  


  return (
    <div className="App">
      
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
     
      
    <div className="fondo">
      <br/>
      <br/>
      <Button onClick={traerInfomacionBack} variant="contained">Llamar al Back</Button>
 
      <br/>
      <br/>
      {respuestaBack}
      
    </div>
 
    </div>
  );
}

export default App;
