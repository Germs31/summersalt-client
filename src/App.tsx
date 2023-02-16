import React from 'react';
// React Router
import {Routes, Route} from 'react-router'
// Pages
import Landing from './pages/Landing'
// Components
import Layout from './components/Layout'
// MUI
import { Container } from '@mui/material'
// Styling
import './App.css';

function App() {
  return (
    <Container disableGutters>
        <Layout>
          <Routes>
            <Route path='/' element={<Landing/>}/>
          </Routes>
        </Layout>

    </Container>
  );
}

export default App;
