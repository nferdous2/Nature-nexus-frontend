import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './MostStory.css'
import moststoryimg from '../../../../img/grocery-about-us.webp'
import { Link } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';



export default function MostStory() {
  return (
    <Box sx={{ flexGrow: 1 }} className="box">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} className="content">
          <p className="most-story-mini-title ">Most story for grocery 2023</p>
          <p className="most-story-title">
            Grocery shopping done <br></br>the safe way for grocery
          </p>
          <p className="para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout the point
            of using like readable now use Lorem Ipsum as their default model
          </p>
          <button className="most-story-btn">Read Most Story</button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Link to='https://youtu.be/DUjOMucfU78'>
            {' '}
            
          <div className='icon-image'>
             <PlayCircleIcon className='play-icon' sx={{fontSize:80}}/>
              <img className="most-story-img" src={moststoryimg} />
          </div>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
