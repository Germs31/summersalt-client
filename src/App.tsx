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
// MUI Style and Theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function App() {
  return (
    <div className="app">
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Landing/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/blogs' element={<Blogs/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/work' element={<Work/>}/>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
