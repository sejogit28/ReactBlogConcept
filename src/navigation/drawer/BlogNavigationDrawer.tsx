import React from 'react'
import 
{
    SwipeableDrawer, List, Divider, ListItem, 
    ListItemIcon, ListItemText, Box
} 
from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

interface BlogNavigationDrawerProps 
{
    navigationDrawerOpen: boolean;
    setNavigationDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogNavigationDrawer = (props: BlogNavigationDrawerProps) => 
{
    const {navigationDrawerOpen: drawerOpen, setNavigationDrawerOpen: setDrawerOpen} = props
    return (
        <SwipeableDrawer
            anchor={"left"}
            open={drawerOpen}
            onClose={() =>{setDrawerOpen(false)}}
            onOpen={() =>{setDrawerOpen(true)}}
         >
             <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={() =>{setDrawerOpen(false)}}
                onKeyDown={() =>{setDrawerOpen(false)}}
            >
            <List>     
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Search'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Login'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AppRegistrationIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Register'} />
                </ListItem>
            </List>
            </Box>
         </SwipeableDrawer>
    )
}

export default BlogNavigationDrawer
