import React, { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    try {
      const res = await fetch('http://localhost:3001/hola_mundo');
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Button variant="contained" color="primary" onClick={handleClick} style={{ color: 'white', marginBottom: '20px' }}>
        ¡Presiona Aquí!
      </Button>
      {response && <p style={{ color: 'white' }}>{response}</p>}
    </div>
  );
}

export default App;

