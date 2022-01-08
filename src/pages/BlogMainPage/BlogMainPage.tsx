import { useState, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom'; 

import { Grid, Divider, SpeedDial, SpeedDialAction, SpeedDialIcon, Zoom } from '@mui/material';
import { SxProps } from '@mui/system';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import BlogCardSection from '../components/BlogCardSection';
import ChipSection from '../components/ChipSection';

import '../../styles/css/BlogMainPage.css'


interface BlogMainPageProps {

}

const BlogMainPage = (blogMainPageProps: BlogMainPageProps) => {
    const location = useLocation();
    //The following line is a pretty new feature, you have to import everything for it to work
    const [darkMode, setDarkMode, navigationDrawerOpen, setNavigationDrawerOpen]: any = useOutletContext();
    const[showFab, setShowFab] = useState(false);
    
    useEffect(() => {
        
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        }
    }, [location])
    
    const scrollToTop = () =>
    {
        window.scrollTo(
            {
                top: 0, 
                behavior: 'smooth'
                /* you can also use 'auto' behaviour in place of 'smooth' but smooth is less jarring*/
            });
    };
        
        const toggleVisible = () => 
        {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 250){
                setShowFab(true);
            } 
            else if (scrolled <= 250){
                setShowFab(false);
            }
        };
        
        window.addEventListener('scroll', toggleVisible);

    const fabStyle: SxProps = {
        position: 'sticky',
        bottom: 16,
        right: 16,
        alignSelf: 'flex-end',
    };
    const toggleDarkMode = () =>
    {
    if(!!localStorage.getItem('darkModeCheck'))
    {
        localStorage.removeItem('darkModeCheck');
        setDarkMode(false);
    }
    else
    {
        localStorage.setItem('darkModeCheck', 'darkModeActive');
        setDarkMode(true);
    }
  }

    return (

        //TODO: Padding may change, also making this margin instead of padding makes the page scroll horizontally  
        <Grid sx={{ p: 8}} container direction="column" >
            <Grid sx={{display: 'flex'}} item xs={12} container>
                <Grid item xs={12} md={8} className='blogcard-section-container'>
                    <BlogCardSection toggleVisible={toggleVisible}/>
                </Grid>
                <Divider orientation='vertical' variant="middle" flexItem  />
                <Grid item xs={12} md={3} className='chip-section-container'>
                    <ChipSection/>
                </Grid>
            </Grid>
            <Zoom in={showFab}>
                <SpeedDial
                    ariaLabel="Page options speed dial"
                    sx={fabStyle}
                    direction='up'
                    icon={<SpeedDialIcon openIcon={<SettingsIcon />} />}
                    >
                        <SpeedDialAction
                        key={'Scroll Up'}
                        icon={<ArrowUpwardIcon/>}
                        tooltipTitle={'Scroll Up'}
                        onClick={()=>{scrollToTop()}}
                        />
                        <SpeedDialAction
                        key={'Toggle Dark Mode'}
                        icon={<Brightness6Icon/>}
                        tooltipTitle={'Toggle Dark Mode'}
                        onClick={()=>{toggleDarkMode()}}
                        />                        
                        <SpeedDialAction
                        key={'Open Nav Drawer'}
                        icon={<MenuOpenIcon/>}
                        tooltipTitle={'Open Nav Drawer'}
                        onClick={()=>{setNavigationDrawerOpen(true);}}
                        />

                </SpeedDial>
            </Zoom>
            </Grid>

    )
}

export default BlogMainPage
