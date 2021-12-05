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
      mode: darkMode ? 'dark' : 'light'
    }
  })

  return (
    <Router>
      <ThemeProvider theme={muiTheme}>
        <MuiAppBar setDarkMode={setDarkMode} darkMode={darkMode}>
            <Paper style={{height: "100vh"}}>
              <Grid>
                <div className="App">
                  <header className="App-header">
                    <p>
                      Design Time!!!
                    </p>
                  </header>
                </div>
              </Grid>
            </Paper>
        </MuiAppBar>
      </ThemeProvider>
    </Router>
  );
}

export default App;
