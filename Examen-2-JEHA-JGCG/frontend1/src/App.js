import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import './App.css'; // Aquí puedes definir tus estilos personalizados

function App() {
  const [response, setResponse] = useState('');

  const getBackendResponse = async () => {
    try {
      const result = await fetch('http://localhost:3000/hola_mundo');
      const message = await result.text();
      setResponse(message);
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      setResponse('Error al obtener la respuesta.');
    }
  };


  return (

    <div className="App">


      <Container maxWidth="sm" style={{ backgroundColor: '#000', padding: '2em', borderRadius: '10px' }}>
        <Button variant="contained" color="primary" onClick={getBackendResponse}>
          Presiona aquí
        </Button>
        {response && (
          <Typography variant="body1" style={{ color: '#FFF', marginTop: '1em' }}>
            Respuesta: {response}
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default App;