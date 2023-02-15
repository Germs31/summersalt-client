import React from 'react';
// React Router
import {Routes, Route} from 'react-router'
// Pages
import Landing from './pages/Landing'
// MUI
import { Container } from '@mui/material'
// Styling
import './App.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </Container>
  );
}

export default App;
