import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import Animal from './Animal'

const Animals = () => {
  const [animals, setAnimals] = useState([])
  useEffect(() => {
    // Fetch all products from your API
    fetch('https://nature-nexus-backend.vercel.app/products')
      .then((response) => response.json())
      .then((data) => {
        // Filter the products with the "freshfood" category
        const freshFoodProducts = data.filter((product) => product.category === 'animal');
        setAnimals(freshFoodProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);


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
      </Box>
    </>
  )
}

export default Animals
