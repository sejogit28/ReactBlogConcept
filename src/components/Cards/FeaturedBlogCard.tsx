import React from 'react';
import {Box, Card, CardContent, CardMedia, IconButton, Typography, Grid } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
interface Props {
    
}

const FeaturedBlogCard = (blogCardProps: Props) => {
    return (
  
  <Grid item xs={12}>
    <Card sx={{ display: 'flex', margin: '1rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Featured Blog Post
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton >
            <ReadMoreIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        image="StelvioPassItaly.jpg"
        alt="Live from space album cover"
      />
    </Card>
  </Grid>
    )
}

export default FeaturedBlogCard
