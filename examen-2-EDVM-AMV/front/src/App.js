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

export default App;