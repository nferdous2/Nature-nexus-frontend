import React from 'react'
import './WildlifeBanner.css'
import { Box, Grid, Typography } from '@mui/material'

const WildlifeBanner = () => {
  return (
    <Box
      className="hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
        <Typography  sx={{ textAlign:"center",fontWeight: 'bold',  marginTop: { xs: '5rem', md: '10rem' } ,fontSize:{xs:'2rem',md:'4rem'},marginLeft: {md:"30%"},
         }}>
        NEW WILDLIFE
          <br />
          EXPERIENCE & JOY
        </Typography>


      <button className="shop-online-btn">Discover more</button>
    </Box>
  )
}

export default WildlifeBanner
