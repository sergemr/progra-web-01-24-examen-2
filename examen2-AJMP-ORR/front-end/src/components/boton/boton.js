import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import axios from "axios";

const Boton = () => {
  const [respuestaBackend, setRespuestaBackend] = useState('');

  const handleSumbit = async () => {
    try {
      const response = await axios.post("http://localhost:3009/hola_mundo");
      setRespuestaBackend(response.data); 
    } catch (error) {
      console.error("Error al obtener la respuesta del backend:", error);
      setRespuestaBackend('Error al obtener la respuesta del backend');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', alignItems:"center" }}>
      <Button variant="contained" color="primary" onClick={handleSumbit}>
        Obtener texto del backend
      </Button>
      <p style={{ color: 'white' }}>{respuestaBackend}</p>
    </div>
  );
};

Boton.propTypes = {};

Boton.defaultProps = {};

export default Boton;