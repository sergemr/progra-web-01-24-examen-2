import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    try {
      const result = await axios.get('http://localhost:3001/hola_mundo');
      setResponse(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ margin: '1rem' }}
      >
        Hola Mundo
      </Button>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;