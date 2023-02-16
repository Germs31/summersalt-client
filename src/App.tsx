import React from 'react';
// React Router
import {Routes, Route} from 'react-router'
// Pages
import Landing from './pages/Landing'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Work from './pages/Work'
// Components
import Layout from './components/Layout'
// MUI
import { Container } from '@mui/material'
// Styling
import './App.css';

function App() {
  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/work' element={<Work/>}/>
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
