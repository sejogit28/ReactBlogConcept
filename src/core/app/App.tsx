import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import BlogMainPage from '../../pages/BlogMainPage/BlogMainPage';
import BlogLayout from '../../components/layout/BlogLayout';

function App() {

// Sometimes photos come back as broken.....
//TODO: Set up blog preview drawer
//TODO: Create blogPage
//TODO: "Finish" navigation drawer

//TODO: Start implementing testing
///Testing all on front end elements
////Maybe make a fake form to test?


  return (
        <Router>
              <Routes>
                <Route element={<BlogLayout />}>
                  <Route path="/" element={<BlogMainPage />}/>
                </Route>
              </ Routes>
        </Router>
  );
}

export default App;
