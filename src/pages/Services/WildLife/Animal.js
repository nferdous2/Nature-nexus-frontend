
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
// import './Book.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Authentication/userContext';

const Animal = (props) => {
  const { userRole } = React.useContext(UserContext);

  const navigate = useNavigate();
  const { pet_name, image, _id, Neutered, Age, Gender } = props.animal
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
            Name:{pet_name}
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
          {userRole === 'admin' ? (
            <>
            <Link to={`/pdetail/${_id}`} >
                      <Button variant="contained"  sx={{ backgroundColor: '#ffb600', color: 'white', fontWeight: 'bold' }}>Details</Button>
                    </Link>
            </>
          ) : (
            <>

              <Button variant="contained" size="small" sx={{ margin: 'auto' }}
                onClick={() => {
                  localStorage.setItem('animal', JSON.stringify(props.animal));
                  navigate(`/details/${_id}`);
                }}>
                Details
              </Button>
            </>
          )}



        </CardActions>
      </Card>
    </Grid>
  )
}

export default Animal
