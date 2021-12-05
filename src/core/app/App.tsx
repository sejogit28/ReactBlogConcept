import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import MuiAppBar from '../../nav/MuiAppBar';

import {Grid} from '@mui/material';

function App() {
  return (
    <Router>
      <MuiAppBar>
        <Grid>
          <div className="App">
            <header className="App-header">
              <p>
                Design Time!!!
              </p>
            </header>
          </div>
        </Grid>
      </MuiAppBar>
    </Router>
  );
}

export default App;
