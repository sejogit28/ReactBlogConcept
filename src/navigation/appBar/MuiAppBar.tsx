import React, { ReactElement } from 'react'
import {AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide, IconButton} from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
 import Brightness6Icon from '@mui/icons-material/Brightness6';

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
  const {setDarkMode, darkMode} = appBarProps;

    return (
    <React.Fragment>
      <CssBaseline />
        <HideOnScroll {...appBarProps}>
          <AppBar>
            <Toolbar>
              <DeveloperModeIcon/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Best Blog Bro
              </Typography>
              <IconButton onClick={() =>{ setDarkMode(!darkMode)}}>
                <Brightness6Icon/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      <Toolbar />
    </React.Fragment>
    )
}

export default MuiAppBar
