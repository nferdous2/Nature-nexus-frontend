import { Box, Typography, Grid, Card, CardMedia, Button } from '@mui/material';
import React from 'react';
import pic1 from "../../../img/t1.jpg"
import pic2 from "../../../img/t3.png"
import pic3 from "../../../img/t2.jpg"

const Offers = () => {
    return (
        <Box sx={{ flexGrow: 2, p: 5, overflow: 'hidden' }}>
        <Typography
          variant="h4"
          sx={{
            color: '#306B4A',
            mt: 3,
            mb: 5,
            fontWeight: 'bold',
            textShadow: '5px 5px  #00000040',
          }}
        >
          OUR BEST OFFERS
        </Typography>
  
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={6} md={4} lg={3}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia component="img" image={pic1} alt="" />
              <Typography
                variant="h5"
                sx={{
                  p: 2,
                  position: 'absolute',
                  bottom: '20%',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                HOT DEALS
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  p: 2,
                  position: 'absolute',
                  bottom: '10%',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                PLANTS RANGE
              </Typography>
            </Card>
          </Grid>
          {/* 2nd grid  */}
  
          <Grid item xs={12} md={4} lg={6} sx={{ p: 3, marginTop: '7%' }}>
            <Card
              sx={{
                position: 'relative',
                mt: 5,
                textShadow: '2px 4px  #00000040',
              }}
            >
              <CardMedia component="img" image={pic2} alt="" />
              <Typography
                variant="h4"
                sx={{
                  right: '24%',
                  p: 2,
                  position: 'absolute',
                  top: '14%',
                  fontWeight: 'bold',
                  color: 'white',
                  // textAlign: 'left',
                }}
              >
                OFFICE PLANT
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 5,
                  right: '1%',
                  p: 2,
                  position: 'absolute',
                  top: '20%',
                  color: 'white',
                  textAlign: 'left',
                }}
              >
                We’re pleased to offer a wide range of <br></br>easy-care
                houseplants and low-maintenance<br></br> office plants.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  right: '38%',
                  top: '65%',
                  background: '#3B8F60',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  '&:hover': {
                    background: 'rgba(59, 143, 96, 0.8)', // Change the alpha value to control transparency
                  },
                }}
              >
                Order Now
              </Button>
            </Card>
          </Grid>
          {/* 3rd grid  */}
  
          <Grid item xs={6} md={4} lg={3}>
            <Card sx={{ position: 'relative', textShadow: '2px 4px  #00000040' }}>
              <CardMedia component="img" image={pic3} alt="" />
              <Typography
                variant="h5"
                sx={{
                  p: 2,
                  position: 'absolute',
                  top: '14%',
                  fontWeight: 'bold',
                  color: '#3B8F60',
                }}
              >
                Buy it
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  p: 2,
                  position: 'absolute',
                  top: '20%',
                  fontWeight: 'bold',
                  color: '#3B8F60',
                }}
              >
                Choose Your Plant
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  position: 'absolute',
                  background: '#3B8F60',
                  top: '33%',
                  // p: 2,
                  marginLeft: '-45%',
                  '&:hover': {
                    background: 'rgba(59, 143, 96, 0.8)', // Change the alpha value to control transparency
                  },
                }}
              >
                Order Now
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
     
    );
};

export default Offers;