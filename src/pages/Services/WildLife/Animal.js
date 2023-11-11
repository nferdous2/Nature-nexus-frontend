
import React, { useState, useEffect, } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Animal = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    // Fetch all products from your API
    fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => {
        // Filter the products with the "animal" category
        const freshFoodProducts = data.filter((product) => product.category === 'animal');
        setAnimals(freshFoodProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);


  return (
    <Box sx={{ p: 3, overflow: 'hidden' }}>
      <Grid item xs={12} md={12}>
      <Typography sx={{ color: '#000000a4', fontSize: '3rem', fontWeight: 600, mb: 2 }}>
      Find a <span style={{ color: "#f8bf02" }}> new friend </span>
          </Typography>
      
        <Grid container spacing={3}>
          {animals.map((animal) => (
            <Grid key={animal.id} item xs={12} sm={12} md={3} lg={3}>
              <Card>
                <CardMedia
                  image={animal.image}
                  title="animals"
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
                    Name:{animal.name}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    Gender: {animal.Gender}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    sx={{ color: 'black' }}
                  >
                    Neutered:{animal.Neutered}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    Age:{animal.Age}
                  </Typography>
                </CardContent>
                  <Link
                    to={`/details/${animal.id}`}
                  >
                    <Button variant="contained" size="small" sx={{ mb:5 }}>
                      Details
                    </Button>
                  </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Box>
  );
};

export default Animal