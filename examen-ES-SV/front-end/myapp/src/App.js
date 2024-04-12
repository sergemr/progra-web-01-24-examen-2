import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";



const HelloWorld = () => {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.get('/api/hola_mundo');
      setMessage(response.data);
    } catch (error) {
      setMessage('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
    }
  };

  return (
    <div style={{ backgroundColor: 'black'}}>
      <Card sx={{ maxWidth: 375, margin: "auto" }}>
        <CardContent style={{ margin: 'center' ,textAlign: 'center', backgroundColor: 'black', color: 'white', paddingTop: '350px' }}>
          <Button onClick={handleClick} variant="contained">
        Hola mundo
      </Button>
      <p>{message}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelloWorld;