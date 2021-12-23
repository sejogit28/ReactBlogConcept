import { Children, useState, useEffect } from 'react';
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
  const [randomDateString, setRandomDateString] = useState<string>("");
  useEffect(() => {
    setRandomDateString(randomDate().toLocaleString());
    
  }, [])
  const LinkToBlogPage = ({children}: any) => 
  {
    return(
      <CardActionArea  component="a" href="#" >
        {children}
      </CardActionArea>
    );
  }
  
  return (
  
      <Grid item xs={12} sm={10}>
        <Card sx={{ display: 'flex' }}>
          <LinkToBlogPage>
          <CardContent sx={{ flex: '1' }}>
            <Typography component="h2" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {randomDateString}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.summary}
            </Typography>
          
          </CardContent>
          </LinkToBlogPage>
            <CardActions>
              <Tooltip title="Read More" arrow TransitionComponent={Zoom}>
                <IconButton size='large' href='#' color="primary">
                  <ReadMoreIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Preview Article" arrow TransitionComponent={Zoom}>
                <IconButton size='large' onClick={()=>{console.log('Eventual preview!!!')}}>
                  <PreviewIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          <CardMedia
            component="img"
            sx={{ width: 160}}
            image='StelvioPassItaly.jpg'
            alt='Picture of Stelvio Pass, Italy'
          />
        </Card>
      </Grid>    )
}

export default FeaturedBlogCard
