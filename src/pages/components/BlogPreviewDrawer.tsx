import React from 'react'
import { Stack, SwipeableDrawer, Divider, Typography, Box} from '@mui/material'

interface BlogPreviewDrawerProps 
{
    id: number;
    title: string;
    post: string;
    previewDrawerOpen: boolean;
    setsPreviewDrawerOpen: () => void;
    setsPreviewDrawerClosed: () => void;
}

const BlogPreviewDrawer = (props: BlogPreviewDrawerProps) => 
{
    const { post, title, previewDrawerOpen, setsPreviewDrawerOpen,setsPreviewDrawerClosed} = props;
    return (
         <SwipeableDrawer
            anchor={'right'}
            open={previewDrawerOpen}
            onOpen={setsPreviewDrawerOpen}
            onClose={setsPreviewDrawerClosed}
        >
                <Box
                sx={{ width: 250, p: 4 }}
                role="presentation"
                onClick={() =>{setsPreviewDrawerClosed()}}
                onKeyDown={() =>{setsPreviewDrawerClosed()}}
            >
                    <Stack>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                        <Divider />
                        <Typography variant="h6">
                            {post}
                        </Typography>
                    </Stack>
                </Box>
        </SwipeableDrawer>
    )
}

export default BlogPreviewDrawer
