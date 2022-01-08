import { useState, useEffect } from 'react';
import 
{
  Card, 
  CardContent, 
  CardMedia, 
  CardActions,
  CardActionArea,
  IconButton,
  Tooltip,
  Zoom,
  Typography, 
  Grid 
} from '@mui/material';

import { randomDate } from '../../services/Utils';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import PreviewIcon from '@mui/icons-material/Preview';

import '../../styles/css/FeaturedBlogCard.css'
import BlogPreviewDrawer from './BlogPreviewDrawer';

interface BlogCardProps {
  id: number;
  title: string;
  summary: string;
  body: string;
  userId: number;
  readTime: number; 

}

const FeaturedBlogCard = (props: BlogCardProps) => 
{
  const { id, title, summary, body } = props
  const [randomDateString, setRandomDateString] = useState("");
  const [photoString, setPhotoString] = useState("");
  const [previewDrawerOpen, setPreviewDrawerOpen] = useState(false);
  useEffect(() => {
    setRandomDateString(randomDate().toLocaleString());
    setPhotoString(`https://picsum.photos/id/${id}/200/100`);
    
  }, [id])
  const LinkToBlogPage = ({children}: any) => 
  {
    return(
      <CardActionArea className='card-content-container' component="a" href="#" >
        {children}
      </CardActionArea>
    );
  }
  const opensPreviewDrawer = (): void => 
  {
    setPreviewDrawerOpen(true);
  }

  const setsPreviewDrawerClosed = (): void =>
  {
    setPreviewDrawerOpen(false);
  }
  
  return (
    <>
      <Grid item xs={12} sm={10}>
        <Card className='card-container'>
          <LinkToBlogPage>
          <CardContent  className='card-content-container'>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {randomDateString}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {summary}
            </Typography>
          
          </CardContent>
          </LinkToBlogPage>
            <CardActions className='card-actions-container'>
              <Tooltip title="Read More" arrow TransitionComponent={Zoom}>
                <IconButton size='large' href='#' color="primary">
                  <ReadMoreIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Preview Article" arrow TransitionComponent={Zoom}>
                <IconButton size='large' onClick={()=>{opensPreviewDrawer();}}>
                  <PreviewIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          <CardMedia
            className='card-media-container'
            component="img"
            sx={{ width: 'auto'}}
            image={photoString}
            alt='Picture of Stelvio Pass, Italy'
          />
        </Card>
      </Grid> 
      <BlogPreviewDrawer 
        key={id} 
        id={id} 
        title={title} 
        post={body} 
        previewDrawerOpen={previewDrawerOpen} 
        setsPreviewDrawerOpen={opensPreviewDrawer}
        setsPreviewDrawerClosed={setsPreviewDrawerClosed}
      />
    </>
         )
}

export default FeaturedBlogCard
