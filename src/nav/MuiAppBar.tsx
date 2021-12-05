import React, { ReactElement } from 'react'
import {AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Slide} from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

interface AppBarProps {
    children: React.ReactElement;
}


function HideOnScroll(props: AppBarProps) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function MuiAppBar(appBarProps: AppBarProps): ReactElement {
    return (
<React.Fragment>
      <CssBaseline />
      <HideOnScroll {...appBarProps}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Best Blog Bro
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
    )
}

export default MuiAppBar
