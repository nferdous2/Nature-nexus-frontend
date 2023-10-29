import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FarmProduct = ({ }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch all products from your API
    fetch('http://localhost:8000/products')
      .then(response => response.json())
      .then(data => {
        // Filter the products with the "freshfood" category
        const freshFoodProducts = data.filter(product => product.category === "freshfood");
        setProducts(freshFoodProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  
//for searching
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // add to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert('Added to cart')
  };

  //main code starts here

  return (
    <Box sx={{ p: 3, overflow: "hidden" }}>
      <Grid container spacing={3}>
    
        <Grid item xs={12} md={9}>
       <Box style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       <Typography variant='h4'>Search You desired product here</Typography>
       <TextField
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />

       </Box>
          <Grid container spacing={3}>
          {filteredProducts.map(product => (
              <Grid key={product.id} item xs={12} sm={12} md={4} lg={4}>
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
                      <IconButton aria-label="add to favorites" onClick={() => addToCart(product)}
                      >
                        <FavoriteIcon />
                      </IconButton>
                      <Button sx={{ backgroundColor: "#ffb600", color: "white", fontWeight: "bold", }}>Details</Button>
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
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Cart Items: {cartItems.length}</Typography>
              <List>
                {cartItems.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${item.name} - ${item.price}`}
                      secondary={
                        <>
                          <Button sx={{ backgroundColor: "#ffb600", color: "black", fontWeight: "bold", m: 2 }}>Delete</Button>
                          <Button sx={{ backgroundColor: "#ffb600", color: "black", fontWeight: "bold", }}>Buy</Button>


                        </>
                      }
                    />

                  </ListItem>
                ))}
              </List>

            </CardContent>
          </Card>      
          
          </Grid>

      </Grid>

    </Box>
  );
};

export default FarmProduct;
