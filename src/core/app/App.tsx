import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import BlogMainPage from '../../pages/BlogMainPage/BlogMainPage';
import BlogLayout from '../../components/layout/BlogLayout';

function App() {

  //TODO: IMPLEMENT TESTING, DO IT!!!
  ///Testing all on front end elements
  ////Maybe make a fake form to test?

// Sometimes photos come back as broken.....
//TODO: Add a footer lol
//TODO: Create blogPage
//TODO: "Finish" navigation drawer



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
