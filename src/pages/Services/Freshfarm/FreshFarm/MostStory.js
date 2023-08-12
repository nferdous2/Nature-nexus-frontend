import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import moststoryimg from '../../../../img/grocery-about-us.webp'
import { Link } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Button,CardContent, CardMedia, Container, Typography } from '@mui/material'


const MostStory = () => {
  const styles = {
    iconImage: {
      position: 'relative',
    },
    playIcon: {
      top: '40%',
      color: '#fff',
      left: '45%',
      position: 'absolute',
    },

  };



  return (
    <Container sx={{ mb: 5, mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "left" }}>
          <Typography sx={{ color: 'rgba(255, 0, 0, 0.67)', fontSize: '1.2rem', mb: 2 }}>
            Most story for grocery 2023
          </Typography>
          <Typography sx={{ color: '#000000a4', fontSize: '3rem', fontWeight: 600, mb: 2 }}>
            Grocery shopping done <br /> the safe way for grocery
          </Typography>
          <Typography sx={{ fontSize: '1rem', fontWeight: 400, color: '#000000a4', mb: 2 }}>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout the point of using like readable now use Lorem
            Ipsum as their default model
          </Typography>
          <Button
            sx={{
              backgroundColor: '#f8bf02',
              color: '#fff',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 600,
              p: 2,
            }}
          >
            Read Most Story
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Link to='https://youtu.be/DUjOMucfU78'>
           <Box sx={{ ...styles.iconImage}}>
            <CardMedia
              component="img"
              alt=""
              height="auto"
              src={moststoryimg} />
            <CardContent>
              <PlayCircleIcon sx={{ ...styles.playIcon, fontSize: 80 }} />
            </CardContent>
          </Box>
           
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MostStory;
