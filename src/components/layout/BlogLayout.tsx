import { useState, useEffect } from 'react'
import {Container} from '@mui/material';
import { Outlet} from 'react-router-dom'; 
import {createTheme, ThemeProvider} from '@mui/material/styles';


import MuiAppBar from '../../navigation/appBar/MuiAppBar';

interface LayoutProps {

}


const BlogLayout = (props: LayoutProps) => 
{

    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      setDarkMode(!!localStorage.getItem('darkModeCheck'));
    }, [darkMode])
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

    <ThemeProvider theme={muiTheme}>
        <MuiAppBar setDarkMode={setDarkMode} darkMode={darkMode}>
            <Container >

            </ Container>
        </MuiAppBar>
            <Outlet/>
    </ThemeProvider>
    )
}

export default BlogLayout
