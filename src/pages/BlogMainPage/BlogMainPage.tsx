import { useState } from 'react';
import { Grid, Divider, Fab, Zoom } from '@mui/material';
import { SxProps } from '@mui/system';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import BlogCardSection from '../components/BlogCardSection';
import ChipSection from '../components/ChipSection';

interface BlogMainPageProps {

}

const BlogMainPage = (blogMainPageProps: BlogMainPageProps) => {

    const[showFab, setShowFab] = useState(false);


    const scrollToTop = () =>
    {
        window.scrollTo(
        {
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour in place of 'smooth' but smooth is less jarring*/
        });
    };

    const toggleVisible = () => {
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
        display: 'inline' ,
        position: 'sticky',
        bottom: 16,
        right: 16,
        alignSelf: 'flex-end',
    };

    return (

        //TODO: Padding may change, also making this margin instead of padding makes the page scroll horizontally  
        <Grid sx={{ p: 8}} container direction="column" >
            <Grid item xs={12} container>
                <Grid item xs={12} md={8}>
                    <BlogCardSection toggleVisible={toggleVisible}/>
                </Grid>
                <Divider orientation='vertical' variant="middle" flexItem  />
                <Grid item xs={12} md={3}>
                    <ChipSection/>
                </Grid>
            </Grid>
            <Zoom in={showFab}>
                <Fab sx={fabStyle} color="secondary" onClick={()=>{scrollToTop()}}>
                    <ArrowUpwardIcon/>
                </Fab>
            </Zoom>
            </Grid>

    )
}

export default BlogMainPage
