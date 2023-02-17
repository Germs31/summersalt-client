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
import { Button } from '@mui/material'
// MUI Style and Theme
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme/>
      <div className="app">
      {/* <Button color="primary" variant="contained">hi</Button>
      <Button color="secondary" variant="contained">bye</Button> */}
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
    </ThemeProvider>
  );
}

export default App;
