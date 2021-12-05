import React, {useState} from 'react'
import 
{
    SwipeableDrawer, Button, List, Divider, ListItem, 
    ListItemIcon, ListItemText 
} 
from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface BlogDrawerProps 
{
    
}

const BlogDrawer = (props: BlogDrawerProps) => 
{
    const [drawerStatus, setDrawerStatus] = useState(false);
    return (
        <SwipeableDrawer
            anchor={"left"}
            open={drawerStatus}
            onClose={() =>{setDrawerStatus(false)}}
            onOpen={() =>{setDrawerStatus(true)}}
          >
            
        </SwipeableDrawer>
    )
}

export default BlogDrawer
