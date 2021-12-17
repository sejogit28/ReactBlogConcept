import React, { useEffect } from 'react'
import { Paper, Typography, Grid } from '@mui/material';
import FeaturedBlogCard from '../components/Cards/FeaturedBlogCard'

interface BlogMainPageProps {

}

const BlogMainPage = (blogMainPageProps: BlogMainPageProps) => {

    return (

        <Grid container spacing={2} direction="column" >
            <Grid item xs={12} container>
                <Grid item xs={6}>
                    <FeaturedBlogCard />
                    <FeaturedBlogCard />
                    <FeaturedBlogCard />
                </Grid>
                <Grid item xs={6}>
                    <FeaturedBlogCard />
                    <FeaturedBlogCard />
                    <FeaturedBlogCard />
                </Grid>
            </Grid>
        </Grid>

    )
}

export default BlogMainPage
