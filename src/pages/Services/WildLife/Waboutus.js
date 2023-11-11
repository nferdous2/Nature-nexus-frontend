import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import aboutimg from '../../../img/wildlife-about.png'
const Waboutus = () => {
  return (
    <Box sx={{ mb: 5, mt: 4,m:5}}>
      <Grid container spacing={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
        <Grid item xs={12} md={6} lg={7} sx={{ textAlign: "left" }}>
        
          <Typography sx={{ color: '#000000a4', fontSize: '3rem', fontWeight: 600, mb: 2 }}>
            Words About World <span style={{ color: "#f8bf02" }}> Animals </span>
          </Typography>
          <Typography sx={{ fontSize: '1rem', fontWeight: 400, color: '#000000a4', mb: 2 }}>
            The Wildlife conservation is long term commitment and journey that requires the cooperation of everyone in the community. We are very much evolved into practice of creating better place.
          </Typography>
          {/* grid  */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 4, lg: 6 }}>
            {/* First Row */}
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ borderBottom: '1px solid #bdbdbd' }}>
              <Typography sx={{ color: '#000000a4', fontSize: '2rem', fontWeight: 600, mb: 2 }}>
                Wildlife Conservation
              </Typography>
              <Typography sx={{ color: '#000000a4', fontSize: '1rem', mb: 2 }}>
                Saving nature is at the very heart of what we do as WildDale.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ borderBottom: '1px solid #bdbdbd', borderLeft: '1px solid #bdbdbd' }}>
              <Typography sx={{ color: '#000000a4', fontSize: '2rem', fontWeight: 600, mb: 2 }}>
                Save Wildlife Habitat
              </Typography>
              <Typography sx={{ color: '#000000a4', fontSize: '1rem', mb: 2 }}>
                We want to make life a better place for animals living in the wild.
              </Typography>
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography sx={{ color: '#000000a4', fontSize: '2rem', fontWeight: 600, mb: 2 }}>
                Interruption of Nature
              </Typography>
              <Typography sx={{ color: '#000000a4', fontSize: '1rem', mb: 2 }}>
                Investigate nature interruption in relevant ways of practice!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ borderLeft: '1px solid #bdbdbd' }}>
              <Typography sx={{ color: '#000000a4', fontSize: '2rem', fontWeight: 600, mb: 2 }}>
                A Safari Volunteering
              </Typography>
              <Typography sx={{ color: '#000000a4', fontSize: '1rem', mb: 2 }}>
                A friendly way to travel and share spaces with majestic animals.
              </Typography>
            </Grid>
          </Grid>


          <Button
            sx={{
              backgroundColor: '#f8bf02',
              color: '#fff',
              borderrdius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              p: 2,
            }}
          >
            Read Most Story
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5}>
         <Box>
          <CardMedia
            component="img"
            alt=""
            height="auto"
            src={aboutimg} />
         
        </Box>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default Waboutus;