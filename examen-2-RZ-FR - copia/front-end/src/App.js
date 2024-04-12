import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [response, setResponse] = useState(null);
 
  const handleClick = async () => {
    try {
       let response2 = await axios.get('http://localhost:3008/hola_mundo');
      setResponse(response2.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" onClick={handleClick}>
        Click me
      </Button>
      <br></br>
      
      <p className='respuesta' style={{ textAlign: 'center' }}>{response}</p>
    </div>
  );
}

export default MyComponent;
