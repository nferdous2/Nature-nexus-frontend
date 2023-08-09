import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import './Aboutus.css'
import aboutus from '../../img/aboutus.jpg'

const AboutUs = () => {
  return (
    <Grid container spacing={2} sx={{ p: 5, mx: 2 }} className="aboutus-box">
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

   
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: 'left', p: 2 }}
          >
            Our mission is to conserve nature and reduce the most pressing
            threats to the diversity of life on Earth.
          </Typography>
        </Grid>
      </Grid>

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
        
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: 'left', letterSpacing: '0' }}
        >
          We collaborate with local communities to conserve the natural
          resources we all depend on and build a future in which people and
          nature thrive. Together with partners at all levels, we transform
          markets and policies toward sustainability, tackle the threats driving
          the climate crisis, and protect and restore wildlife and their
          habitats.
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            p: 2,
          }}
        >
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
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{ mb: 5, textAlign: 'left' }}
      >
        {/* <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
          GFHHUHUHU
        </Typography> */}
        <img className="aboutus-image" src={aboutus} alt="" />
      </Grid>
    </Grid>
  )
}

export default AboutUs
