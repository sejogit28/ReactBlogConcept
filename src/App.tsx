import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import {Grid} from '@mui/material';
function App() {
  return (
    <Router>
      <Grid>
        <div className="App">
          <header className="App-header">
            <p>
              Design Time!!!
            </p>
          </header>
        </div>
      </Grid>
    </Router>
  );
}

export default App;
