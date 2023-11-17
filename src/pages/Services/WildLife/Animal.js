import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'
// import './Book.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link, useNavigate } from 'react-router-dom'

const Animal = (props) => {
  
  const navigate = useNavigate();
  const { name, image, id, Neutered, Age, Gender } = props.animal
  // console.log(props.animal)
  
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Card sx={{ maxWidth: 330, margin: '25px' }}>
        <CardMedia
          image={image}
          title="green iguana"
          sx={{
            width: 150,
            height: 150,
            margin: 'auto',
            borderRadius: '50%',
            mt: '20px',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            Name:{name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Gender: {Gender}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{ color: 'black' }}
          >
            Neutered:{Neutered}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Age:{Age}
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" size="small" sx={{ margin: 'auto' }} 
        onClick={() => {
          localStorage.setItem('animal', JSON.stringify(props.animal));
          navigate(`/details/${id}`);
        }}>
              Details
          </Button>
          {/* <Link
            sx={{ margin: 'auto' }}
            to={{
              pathname: `/details/${id}`,
            //   state: { myState: 'myStateValue' },
              // state: { animals }, // Pass the full animal data as state
            }}
          >
            
          </Link> */}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Animal
