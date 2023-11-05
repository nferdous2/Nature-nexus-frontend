import { Grid, Typography } from '@mui/material';
import React from 'react';
import image from '../../../img/wildlife1.jpg'

const Sustainable = () => {
  return (
    <div>
      <Grid container spacing={2}  sx={{pt:10}}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h4" className="changing-nature-title" sx={{ pt: 18 }}>
            Sustainable infrastructure
          </Typography>
          <Typography variant="body1" className="changing-nature-body" sx={{ pt: 0 }}>
            Strategic and sustainable development that to thrive.
          </Typography>
          <Typography variant="body1" className="changing-nature-body" sx={{ pt: 0 }}>
            provides for humanity’s needs and allows nature
          </Typography>
          <Typography variant="body1" className="changing-nature-body" sx={{ pt: 0 }}>
            to thrive.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
          <img src={image} alt="Description of the image" sx={{ pt: 5, pr: 2, pb: 5, pl: 2,p:5 }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Sustainable;
