import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Botones = () => {
  const [message, setMessage] = useState('');

  const fetchBoton = async () => {
    try {
      const response = await fetch('/hola-mundo');
      const data = await response.text();
      console.log(data)
      setMessage(data);
    } catch (error) {
      console.error('Error fetching hola mundo:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={fetchBoton}
        sx={{ mb: 2 }}
      >
        Saluda al mundo
      </Button>
      {message && (
        <Typography variant="h6" component="div">
          {"Esta es una prueba del servidor, la respuesta es exitosa!"}
        </Typography>
      )}
    </Box>
  );
};


export default Botones;
