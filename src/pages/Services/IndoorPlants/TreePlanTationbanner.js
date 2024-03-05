import React from 'react'
import './TreePlanTationbanner.css'
import { Box, Typography } from '@mui/material'

const TreePlantationBanner = () => {
  return (
    <Box
      className="thero"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
        <Typography 
         sx={{
          color:"#3b8f60", textAlign:"center",fontWeight: 'bold',
         marginTop: { xs: '5rem',md:"-8%"  } ,
        fontSize:{xs:'2rem',md:'3rem'},
        marginLeft: {md:"50%"},
        }}>
        Plants are friends
        <br />
        that always keep <br></br>you company
      </Typography>
      <button className="explore-btn">Explore</button>
      
    </Box>
  )
}

export default TreePlantationBanner
