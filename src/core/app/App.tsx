import React, {useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import {Grid, Paper} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';


import MuiAppBar from '../../nav/MuiAppBar';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const muiTheme = createTheme(
  {
    palette: 
    {
      mode: darkMode ? 'dark' : 'light',
      primary: 
      {
        main: '#003BA3'
      },
      secondary:
      {
        main: '#7AABFF'
      }
    }
  })

  return (
    <Router>
      <ThemeProvider theme={muiTheme}>
        <MuiAppBar setDarkMode={setDarkMode} darkMode={darkMode}>
            <Grid>
              <Paper>
                
              </Paper>
            </Grid>
        </MuiAppBar>
      </ThemeProvider>
    </Router>
  );
}

export default App;
