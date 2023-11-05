import { Grid, Typography } from '@mui/material'
import React from 'react'
import image from '../../../img/wildlife2.jpg'

const ChangingNature = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{pt:5}}>
        <Grid item xs={12} sm={12} md={6} lg={6} >
          <img  src={image} alt="Description of the image" sx={{ pt: 2 }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h4" className="changing-nature-title" sx={{pt:18}}>
            Changing Nature of Business
          </Typography>
          <Typography variant="body1" className="changing-nature-body" sx={{pt:0}}>
            See how we work with companies
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChangingNature
