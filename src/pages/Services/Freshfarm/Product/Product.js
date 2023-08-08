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
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const Product = ({ }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file (you might need to adjust the path)
    fetch('http://localhost:8000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert('Added to cart')
  };

  return (
    <Box sx={{p:3,overflow:"hidden"}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {products.map(product => (
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
                      <Button sx={{backgroundColor:"#ffb600",color:"white", fontWeight:"bold",}}>Details</Button>

                      {/* <Link to={`/bookDataCollection/${product.id}`}>
                        <button className="button">Details</button>
                      </Link> */}
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
                <Button sx={{backgroundColor:"#ffb600",color:"black", fontWeight:"bold",m:2}}>Delete</Button>
                <Button sx={{backgroundColor:"#ffb600",color:"black", fontWeight:"bold",}}>Buy</Button>

                  
                </>
              }
            />
                      {/* <ListItemText
                        primary={`${item.name} - ${item.price}`}
                        secondary={
                          <Link to={`/bookDataCollection/${item.id}`}>
                            <button className="button">Delete</button>
                          </Link>
                        }
                      /> */}
                    </ListItem>
                  ))}
                </List>
          {/* <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
                <button className="button">Details</button>

              </li>
         
            ))}
          </ul> */}
        </CardContent>
      </Card>        </Grid>

      </Grid>

    </Box>
  );
};

export default Product;
