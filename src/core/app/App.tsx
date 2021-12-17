import {useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'; 
import {Grid} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import BlogMainPage from '../../pages/BlogMainPage';
import MuiAppBar from '../../navigation/appBar/MuiAppBar';
import BlogLayout from '../../components/layout/BlogLayout';

function App() {



  return (
        <Router>
              <Routes>
                <Route path="/" element={<BlogLayout />}>
                  <Route path="blogmainpage" element={<BlogMainPage />}/>
                </Route>
              </ Routes>
        </Router>
  );
}

export default App;
