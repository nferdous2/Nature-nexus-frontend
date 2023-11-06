// // CartPage.js
// import {
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   TextField,
//   Typography,
// } from '@mui/material';
// import React, { useEffect, useState } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Retrieve the cart data from local storage when the page loads
//     const storedCart = JSON.parse(localStorage.getItem('cartItems'));
//     if (storedCart) {
//       setCartItems(storedCart);
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Cart Page</h2>
//       {cartItems.map((item) => (
//         <Card key={item.id} variant="outlined" style={{ marginBottom: '1rem' }}>
//           <CardContent>
//             <Grid container justifyContent="space-between" alignItems="center">
//               <Grid item xs={12} md={2}>
//                 <img
//                   src={item.image}

//                   alt=''
//                   style={{ width: '100%' }}
//                 />
//               </Grid>
//               <Grid item xs={12} md={2}>
//                 <Typography variant="h5" fontWeight="normal" gutterBottom>
//                   {item.name}
//                 </Typography>
//                 <Typography color="textSecondary">
//                   <span>Price: </span>{item.price}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "space-around" }}>
//                 <Button
//                   sx={{ backgroundColor: '#ffb600', color: 'black', fontWeight: 'bold', }}
//                   onClick={() => removeFromCart(item)}
//                 >
//                   -
//                 </Button>
//                 <TextField sx={{ width: "20%" }}>
//                   {item.quantity}
//                 </TextField>
//                 <Button
//                   sx={{ backgroundColor: '#ffb600', color: 'black', fontWeight: 'bold' }}
//                   onClick={() => addToCart(item)}
//                 >
//                   +
//                 </Button>
//               </Grid>
//               <Grid item xs={12} md={2} style={{ marginLeft: '1rem' }}>
//                 <Typography variant="h5" gutterBottom>
// {item.price}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} md={2} style={{ textAlign: 'right' }}>
//                 <Button className="text-danger">
//                   delete
//                 </Button>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       ))}

//     </div>
//   );
// };

// export default Cart;

// CartPage.js
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
    }
  }, []);

  // Function to handle incrementing the quantity of an item
  const addToCart = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
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
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  return (
    <div>
      <h2>Cart Page</h2>
      {cartItems.map((item) => (
        <Card key={item.id} variant="outlined" style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} md={2}>
                <img src={item.image} alt='' style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography variant="h5" fontWeight="normal" gutterBottom>
                  {item.name}
                </Typography>
                <Typography color="textSecondary">
                  <span>Price: </span>{item.price}
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
               Total Pricr: ${item.price * item.quantity}
                </Typography>
              </Grid>
              <Grid item xs={12} md={2} style={{ textAlign: 'right' }}>
                <Button className="text-danger">
                  delete
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cart;