import React, { ReactElement, useState } from 'react'
import {AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide, IconButton} from '@mui/material';

import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import BlogNavigationDrawer from '../drawer/BlogNavigationDrawer';

interface AppBarProps 
{
    children: React.ReactElement;
    setDarkMode:  React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean;
}


function HideOnScroll(appBarProps: AppBarProps) 
{
  const { children } = appBarProps;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function MuiAppBar(appBarProps: AppBarProps): ReactElement 
{
  const {setDarkMode} = appBarProps;
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    <React.Fragment>
      <CssBaseline />
        <HideOnScroll {...appBarProps}>
          <AppBar>
            <Toolbar>
              <DeveloperModeIcon/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} data-testid='appName'>
                Best Blog Bro
              </Typography>
              <IconButton onClick={() =>{ setDrawerOpen(true);}}>
                <MenuOpenIcon/>
              </IconButton>
              <IconButton onClick={() =>{ toggleDarkMode();}}>
                <Brightness6Icon/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      <Toolbar />
          <BlogNavigationDrawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}/>
    </React.Fragment>
    )
}

export default MuiAppBar
