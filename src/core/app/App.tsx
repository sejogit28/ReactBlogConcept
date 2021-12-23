import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import BlogMainPage from '../../pages/BlogMainPage';
import BlogLayout from '../../components/layout/BlogLayout';

function App() {

//TODO: Infini Scroll?
//TODO: Set up blog preview drawer
//TODO: Create view blog page
//TODO: Make picture different based off post
//TODO: Start implementing testing
///Testing all on front end elements
////Maybe make a fake form to test?
//TODO: Finish drawer


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
