import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import Animal from './Animal'

const Animals = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((data) => {
        //FILTER THE animaals to get only the available ones
        const availableAnimals = data.filter(
          (product) => product.category === 'animal',
        )
        setAnimals(availableAnimals)
        console.log(availableAnimals)
      })
  }, [])
  // console.log(animals)
  // useEffect(() => {
  //   //fetch all animals from api
  //   fetch('http://localhost:8000/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //FILTER THE animaals to get only the available ones
  //       const availableAnimals = data.filter((animals) => animals.Category === 'WildLife')
  //       setAnimals(availableAnimals)
  //       console.log(availableAnimals)
  //     } )

  //     console.log(animals)
  // }
  // , [])
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ py: 1, px: 2, mt: 5, mb: 5 }}>
          Find a new friend
        </Typography>
        <Grid container>
          {animals.map((animal) => (
            <Animal key={animal.id} animal={animal}></Animal>
          ))}
        </Grid>

        {/* {animals.map((animals) => (
          <Grid container spacing={2} key={animals.id} item xs={12} sm={12} md={2} lg={2} >
            <Card sx={{ maxWidth: 300}}>
              <CardMedia
                image={animals.image}
                title="green iguana"
                sx={{
                  width: 150,
                  height: 200,
                  margin: 'auto',
                  borderRadius: 'rounded',
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  Name:{animals.name}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Gender: {animals.Gender}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{ color: 'black' }}
                >
                  Neutered:{animals.Neutered}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Age:{animals.Age}
                </Typography>
              </CardContent>
              <CardActions>
                   <Link
                  to={{
                    pathname: `/details/${animals.id}`,
                    state: {myState: "myStateValue"},
                    // state: { animals }, // Pass the full animal data as state
                  }}
                >
                  <Button variant="contained" size="small" sx={{ margin: 'auto' }}>
                    Details
                  </Button>
                </Link>
                </CardActions>
            </Card>
          </Grid>
          <Grid container spacing={2} key={animals.id}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
               <Card sx={{ maxWidth: 300}}>
              <CardMedia
                image={animals.image}
                title="green iguana"
                sx={{
                  width: 150,
                  height: 200,
                  margin: 'auto',
                  borderRadius: 'rounded',
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  Name:{animals.name}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Gender: {animals.Gender}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{ color: 'black' }}
                >
                  Neutered:{animals.Neutered}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Age:{animals.Age}
                </Typography>
              </CardContent>
              <CardActions>
                   <Link
                  to={{
                    pathname: `/details/${animals.id}`,
                    state: {myState: "myStateValue"},
                    // state: { animals }, // Pass the full animal data as state
                  }}
                >
                  <Button variant="contained" size="small" sx={{ margin: 'auto' }}>
                    Details
                  </Button>
                </Link>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card sx={{ maxWidth: 300}}>
              <CardMedia
                image={animals.image}
                title="green iguana"
                sx={{
                  width: 150,
                  height: 200,
                  margin: 'auto',
                  borderRadius: 'rounded',
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  Name:{animals.name}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Gender: {animals.Gender}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{ color: 'black' }}
                >
                  Neutered:{animals.Neutered}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Age:{animals.Age}
                </Typography>
              </CardContent>
              <CardActions>
                   <Link
                  to={{
                    pathname: `/details/${animals.id}`,
                    state: {myState: "myStateValue"},
                    // state: { animals }, // Pass the full animal data as state
                  }}
                >
                  <Button variant="contained" size="small" sx={{ margin: 'auto' }}>
                    Details
                  </Button>
                </Link>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              f
            </Grid>
           
          </Grid>
        ))} */}
      </Box>
    </>
  )
}

export default Animals
