import { Button, Divider, Grid, Typography,Container } from '@mui/material'
import React from 'react'
import aboutus from '../../img/aboutus.jpg'

const AboutUs = () => {
  return (
    <Container>
   <Grid item  sm={12} md={6} lg={6} sx={{ textAlign: 'center',p:3,mb:3 }}>
          <Typography
            variant="h3"
            sx={{
              marginBottom: 3,
              color: '#444',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            Who We Are{' '}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ p: 2 }}>
            Our mission is to conserve nature and reduce the most pressing
            threats to the diversity of life on Earth.
          </Typography>
        </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Divider
            sx={{
              my: 2,
              backgroundColor: '#f8bf02',
              height: '3px',
              borderRadius: '3px',
              width: '15%',
            }}
          />
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
            Our Impact
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', letterSpacing: '0' }}>
            We collaborate with local communities to conserve the natural
            resources we all depend on and build a future in which people and
            nature thrive. Together with partners at all levels, we transform
            markets and policies toward sustainability, tackle the threats driving
            the climate crisis, and protect and restore wildlife and their
            habitats.
          </Typography>
          {/* 1st button  */}
          <Button
              sx={{
                mr: 4,
                width: '40%',
                color: 'white',
                background: '#f8bf02',
                fontWeight: 'bold',
                '&:hover': {
                  background: '#FF7F00', // New background color when hovering
                },
              }}
            >
              Donate Now
            </Button>
 {/* 2nd button  */}
            <Button
              sx={{
                mr: 4,
                width: '40%',
                color: 'black',
                background: 'transparent',
                fontWeight: 'bold',
                border: '1px solid black',
              }}
            >
              More ways you can help
            </Button>
    
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: { xs: 3, sm: 4 ,md:-5}}}>
          <img style={{width:"100%"}} src={aboutus} alt="" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutUs;
