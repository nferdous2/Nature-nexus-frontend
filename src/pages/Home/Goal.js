import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import veg1 from '../../img/veg-1.png'
import veg2 from '../../img/veg.png'
import forest from '../../img/forest.png'
import animal from '../../img/wildlife.png'
import './Goal.css'

const Goal = () => {
  return (
    <Box
      sx={{ marginBottom: 5, p: 5, overflow: 'hidden' }}
      className="goal-box"
    >
      <Box sx={{ marginBottom: 3, textAlign: 'left' }}>
        <Divider
          sx={{
            my: 1,
            backgroundColor: '#f8bf02',
            height: '3px',
            borderRadius: '3px',
            width: '7%',
          }}
        />
        <Typography
          variant="h3"
          sx={{ marginBottom: 3, color: '#444', fontWeight: 'bold' }}
        >
          Our Goals
        </Typography>
        <Typography sx={{ marginBottom: 5, fontSize: '20px' }}>
          Recognizing that the problems facing our planet are increasingly more
          complex and urgent, WWF focuses its work on six ambitious goals.
          Through this integrative approach, we can challenge the planet’s
          greatest threats and ensure a healthy future for people and nature.
        </Typography>
      </Box>

      <Grid
        container
        rowSpacing={1}
        sx={{ p: 4 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
        >
          <img src={veg1} alt="" width="60" height="60" />
          <Typography
            gutterBottom
            sx={{
              marginLeft: 3,
              fontSize: 20,
              '&:hover': { letterSpacing: '1px' },
            }}
          >
            Rebuild food systems to nourish people and nature
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
        >
          <img src={veg2} alt="" width="60" height="60" />
          <Typography
            gutterBottom
           sx={{
              marginLeft: 3,
              fontSize: 20,
              '&:hover': { letterSpacing: '1px' },
            }}
          >
            Rebuild food systems to nourish people and nature
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
        >
          <img src={forest} alt="" width="60" height="60" />
          <Typography
            gutterBottom
          sx={{
              marginLeft: 3,
              fontSize: 20,
              '&:hover': { letterSpacing: '1px' },
            }}
          >
            Conserve the world's most important forests
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
        >
          <img src={animal} alt="" width="60" height="60" />
          <Typography
            gutterBottom
           sx={{
              marginLeft: 3,
              fontSize: 20,
              '&:hover': { letterSpacing: '1px' },
            }}
          >
            Conserve and save wildlife
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Goal
