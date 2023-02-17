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


function App() {

  const [ mode, setMode ] = useState<string>("light")

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightAppTheme : darkAppTheme),
    [mode]
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
