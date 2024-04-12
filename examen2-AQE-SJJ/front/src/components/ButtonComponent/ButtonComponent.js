import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ButtonComponent = () => {
  const [response, setResponse] = useState('');

  //llama al GET en click al boton
  const handleClick = async () => {
    try {
      const res = await fetch('http://localhost:5000/hola_mundo');
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  //refresca la pagina
  const handeleRefresh = () =>{
    window.location.reload();
  }
  return (
    //Container con el boton y el texto y las caracteristicas solicitadas
    <Container maxWidth="sm" style={{ backgroundColor: 'black', textAlign: 'center', paddingTop: '20px' }}>
      //hola 
      <Button variant="contained" color="primary" onClick={handleClick} onDoubleClick={handeleRefresh} style={{ color: 'white' }}>
        Obtener respuesta del Backend
      </Button>
      {response && (
        <Typography variant="body1" style={{ color: 'white', marginTop: '20px' }}>
          {response}
        </Typography>
      )}
    </Container>
  );
};

export default ButtonComponent;
