import {useEffect, useState} from 'react'
import { Stack, Button } from '@mui/material';

import BlogPostService from '../../services/BlogPostService';
import FeaturedBlogCard from '../components/FeaturedBlogCard'

interface BlogCardSectionProps 
{
    toggleVisible: () => void;    
}

const BlogCardSection = (props: BlogCardSectionProps) => 
{
    const {toggleVisible} = props;
    const[blogMainPageData, setBlogMainPageData] = useState([]);
    const[blogMainPageDataCurrentLength, setBlogMainPageDataCurrentLength] = useState(10);
    const[dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => 
    {
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
    }, [blogMainPageDataCurrentLength, toggleVisible]);

    const continuesInfiniScroll = () => 
    {
        setBlogMainPageDataCurrentLength(blogMainPageDataCurrentLength + 10);
    };


    return (
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
            dataLoaded && blogMainPageData.length !== blogMainPageDataCurrentLength && 
            <Button color="secondary" onClick={()=>{continuesInfiniScroll()}}>
                Show More?
            </Button>
        }
    </Stack>
    )
}

export default BlogCardSection
