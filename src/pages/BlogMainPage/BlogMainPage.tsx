import { useState, useEffect } from 'react';
import { Grid, Stack, Divider, Fab, Zoom, Button } from '@mui/material';
import { SxProps } from '@mui/system';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import BlogPostService from '../../services/BlogPostService';
import FeaturedBlogCard from '../../components/Cards/FeaturedBlogCard'

interface BlogMainPageProps {

}

const BlogMainPage = (blogMainPageProps: BlogMainPageProps) => {

    const[blogMainPageData, setBlogMainPageData] = useState([]);
    const[blogMainPageDataCurrentLength, setBlogMainPageDataCurrentLength] = useState(10);
    const[dataLoaded, setDataLoaded] = useState(false);
    const[showFab, setShowFab] = useState(false);

    useEffect(() => {
        const loadMainPageData = async () =>
        {
            await BlogPostService.getsAllPosts().then(mainPageData => 
            {
                console.log(mainPageData);
                setBlogMainPageData(mainPageData);
                
            })
            setDataLoaded(true);
        }
        loadMainPageData();
        return () =>
        {
            window.removeEventListener('scroll', toggleVisible);
        }
    }, [blogMainPageDataCurrentLength]);

    const scrollToTop = () =>
    {
        window.scrollTo(
        {
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour in place of 'smooth' but smooth is less jarring*/
        });
    };

    const continuesInfiniScroll = () => 
    {
        setBlogMainPageDataCurrentLength(blogMainPageDataCurrentLength + 10);
    }
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
        <Grid sx={{ p: 8}} container /* spacing={2} */ direction="column" >
            <Grid item xs={12} container>
                <Grid item xs={12} md={8}>
                    <Stack spacing={6}>
                        {blogMainPageData && blogMainPageData.filter((item, index) => index < blogMainPageDataCurrentLength).map((blogPostData: any, index: number) =>
                        {
                            return(
                                <>
                                    <FeaturedBlogCard 
                                    key={blogPostData.id}
                                    id={blogPostData.id}
                                    userId={blogPostData.userId}
                                    title={blogPostData.title}
                                    summary={blogPostData.summary}
                                    body={blogPostData.body}
                                    readTime={blogPostData.readTime}
                                    />
                                </>
                            );
                        })}
                        
                        {
                            dataLoaded &&
                         blogMainPageData.length !== blogMainPageDataCurrentLength && 
                            <Button color="secondary" onClick={()=>{continuesInfiniScroll()}}>
                                Show More?
                            </Button>
                        }
                    </Stack>
                </Grid>
                <Divider orientation='vertical' variant="middle" flexItem  />
                <Grid item xs={12} md={3}>
                    <Stack>

                    </Stack>
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
