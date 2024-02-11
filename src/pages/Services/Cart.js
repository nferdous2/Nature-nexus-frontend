
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve the cart data from local storage when the page loads
    const storedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCart) {
      setCartItems(storedCart);
      console.log(storedCart)
    }
  }, []);

  // Function to handle incrementing the quantity of an item
  const addToCart = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Function to handle decrementing the quantity of an item
  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  //delete cartItems
  const handleDelete = (itemToDelete) => {
    const updatedCartItems = cartItems.filter((item) => {
      if (item._id !== itemToDelete._id) {
        return true;
      } else {
        console.log(`Deleting item with _id: ${itemToDelete._id}`);
        return false;
      }
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  //go to details page
  const handleBuy = (item) => {
    window.location.href = `/detail/${item._id}?name=${item.name}&price=${item.price}&quantity=${item.quantity}`;
  };

  //main code start from here
  return (
    <div style={{ overflow: "hidden",marginBottom:"5%" }}>
      <h2 style={{ marginTop: "5%" }}>Here is Your Items</h2>
      {/* map the cart items from local storage */}
      {cartItems.map((item) => (
        <div style={{ display: 'flex', justifyContent: 'center', }}>
          <Card key={item._id} variant="outlined" style={{ marginBottom: '2rem', width: "75%", }}>
            <CardContent>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={12} md={1}>
                  <img src={item.image} alt='' style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5" fontWeight="normal" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography color="textSecondary">
                    <span>Price:$ </span>{item.price}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Button
                    sx={{ backgroundColor: '#ffb600', color: 'black', fontWeight: 'bold' }}
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </Button>
                  <TextField
                    sx={{ width: "20%" }}
                    value={item.quantity}
                  />
                  <Button
                    sx={{ backgroundColor: '#ffb600', color: 'black', fontWeight: 'bold' }}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                </Grid>

                <Grid item xs={12} md={2} style={{ marginLeft: '1rem' }}>
                  <Typography variant="h5" gutterBottom>
                    Total Price: ${item.price * item.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={1} >
                  <Button sx={{ backgroundColor: '#ffb600', color: 'white', fontWeight: 'bold','&:hover': {
                      backgroundColor: '#ffb600'} }} onClick={() => handleDelete(item)}>
                    delete
                  </Button>
                </Grid>
                <Grid item xs={12} md={2} >
                  <Button sx={{ backgroundColor: '#ffb600', color: 'white', fontWeight: 'bold','&:hover':{
                    backgroundColor: '#ffb600'} }}
                      onClick={() => handleBuy(item)}>
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      ))}


    </div>
  );
};


export default Cart;
