import React, { useState } from 'react';
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
// MUI Style and Theme
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { lightAppTheme } from './themes/light'
import { darkAppTheme } from './themes/dark'
// Import State 
import { AppState } from './context/StateProvider'


function App() {

  const { applicationState } = AppState()

  const theme = React.useMemo(
    () => createTheme(applicationState.mode === "light" ? lightAppTheme : darkAppTheme),
    [applicationState.mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="app">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
