import React, { useState, useEffect, } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Search } from '@mui/icons-material';

const FarmProduct = () => {
  // Initialize cart items from localStorage if available, or an empty array
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch all products from your API
    fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => {
        // Filter the products with the "freshfood" category
        const freshFoodProducts = data.filter((product) => product.category === 'freshfood');
        setProducts(freshFoodProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  // Update localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  
  // FarmProduct.js


  const addToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
    // Update the cart data in local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert('Added to cart');
  };
  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, overflow: 'hidden' }}>
        <Grid item xs={12} md={12}>
          <Box style={{  alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4">Search Your Desired Product Here</Typography>
            <br/>
            <FormControl sx={{ m: 1, width: '30%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Search products"
            value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            endAdornment={<Search position="end"></Search>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />           
          </FormControl>

           
          </Box>
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={12} md={3} lg={3}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 3,
                    marginBottom: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        {product.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {product.price}
                      </Typography>
                      <IconButton aria-label="add to favorites" onClick={() => addToCart(product)}>
                        <FavoriteIcon />
                      </IconButton>
                      <Button sx={{ backgroundColor: '#ffb600', color: 'white', fontWeight: 'bold' }}>
                        Details
                      </Button>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 200, height: 250 }}
                    image={product.image}
                    alt={`${product.name} cover`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

    </Box>
  );
};

export default FarmProduct