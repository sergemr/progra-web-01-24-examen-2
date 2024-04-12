import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white' }}>Home</h1>
      <Link to="/HolaMundo" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">Go to Hola Mundo</Button>
      </Link>
    </div>
  );
}
  
function HolaMundo() {
  return (

    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white' }}>Home</h1>
      <Link to="/HolaMundo" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">Go to Hola Mundo</Button>
      </Link>
      <h1 style={{ color: 'white' }}>Esta es una prueba de respuesta del servidor, la respuesta es exitosa! </h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HolaMundo" element={<HolaMundo />} />
      </Routes>
    </Router>
  );
}

export default App;
