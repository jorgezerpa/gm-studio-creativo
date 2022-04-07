import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

        //material-ui setup
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from './assets/theme';


import { Home } from './container';
import { Navbar } from './components';
import { Footer } from './Sections';

import useStyles from './styles'; 

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.app}>
            <Router>
                <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />        
              </Routes>
            </Router>
              <Footer />
          </div>
    </ThemeProvider>
  );
}

export default App;
