
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
  const increaseItem = (item) => {
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
  const decreaseItem = (item) => {
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
    <div style={{ overflow: "hidden", marginBottom: "5%" }}>
      <h2 style={{ marginTop: "5%" }}>Here is Your Items</h2>
      {/* map the cart items from local storage */}
      {cartItems.map((item) => (
        <div style={{ display: 'flex', justifyContent: 'center', padding: "10px" }}>
          <Card key={item._id} variant="outlined" style={{ width: "75%",borderRadius:"30px" }}>
            <CardContent>
              <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
              {/* img grid  */}
                <Grid item xs={12} md={2}>
                  <img src={item.image} alt='' style={{ width: '100%' }} />
                </Grid>
                {/* product name  */}
                <Grid item xs={12} md={1}>
                  <Typography variant="h5" fontWeight="normal" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography color="textSecondary">
                    <span>Price:$ </span>{item.price}
                  </Typography>
                </Grid>
                {/* quantity  */}
             
                <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    sx={{ backgroundColor: '#ffb600', color: 'black', fontWeight: 'bold', marginRight: "4%" }}
                    onClick={() => decreaseItem(item)}
                  >
                    -
                  </Button>
                  <TextField
                    sx={{ width: "45%" }}
                    value={item.quantity}
                  />
                  <Button
                    sx={{ backgroundColor: '#ffb600', color: 'black', fontWeight: 'bold', marginLeft: "4%" }}
                    onClick={() => increaseItem(item)}
                  >
                    +
                  </Button>
                </Grid> 
                {/* price  */}
                <Grid item xs={12} md={2} style={{ marginLeft: '1rem' }}>
                  <Typography variant="h5" gutterBottom>
                    Total Price: ${item.price * item.quantity}
                  </Typography>
                </Grid>
                {/* delete button  */}
                <Grid item xs={12} md={1} sm={6}>
                  <Button
                    fullWidth
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#ffb600',
                      },
                    }}
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </Button>
                </Grid>
                {/* buy now button  */}
                <Grid item xs={12} md={1} sm={6}>
                  <Button
                    fullWidth
                    sx={{
                      backgroundColor: '#ffb600',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#ffb600',
                      },
                    }}
                    onClick={() => handleBuy(item)}
                  >
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
