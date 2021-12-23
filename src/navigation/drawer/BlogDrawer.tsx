import React from 'react'
import 
{
    SwipeableDrawer, List, Divider, ListItem, 
    ListItemIcon, ListItemText, Box
} 
from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


interface BlogDrawerProps 
{
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogDrawer = (props: BlogDrawerProps) => 
{
    const {drawerOpen, setDrawerOpen} = props
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            </Box>
         </SwipeableDrawer>
    )
}

export default BlogDrawer
