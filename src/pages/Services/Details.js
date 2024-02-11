import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import "../../Styles/Style.css"
import { Grid, CardContent, TextField, Button } from '@mui/material';
import { UserContext } from '../../Authentication/userContext';

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { userId } = useContext(UserContext)
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => {
        const fetchedProduct = data.find((product) => product._id === id);
        setProduct(fetchedProduct);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Handle loading state or error as needed
  }
//get the product details 
  const name = new URLSearchParams(window.location.search).get('name');
  const price = new URLSearchParams(window.location.search).get('price');
  const quantity = new URLSearchParams(window.location.search).get('quantity');
  const totalPrice = price * quantity;

  //submit the product
  const onSubmit = (data) => {
    data.productId = id;
    data.userId = userId;
    fetch("http://localhost:8000/purchase", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.replace(data.url);
        console.log(data);
      });
  };

  return (
    //main code starts here
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <CardContent>
          <h2 style={{ marginTop: '20%' }}>Place Your Order</h2>
         {/* form for payment  */}
      
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Card data */}
            <TextField sx={{ mb: 3 }} label="Product Name" type="text" {...register('productName')} value={name} fullWidth readOnly />
            <TextField sx={{ mb: 3 }} label="Card Price" type="text" value={price} fullWidth readOnly />
            <TextField sx={{ mb: 3 }} label="Card Quantity" type="text" {...register('quantity')} value={quantity} fullWidth readOnly />
            <TextField sx={{ mb: 3 }} label="Card Total Price" type="text" {...register('totalPrice')} value={totalPrice} fullWidth readOnly />
            {/* user  information */}
            <TextField sx={{ mb: 3 }} label="Your Name" type="text" {...register('customerName')} required fullWidth />
            <TextField sx={{ mb: 3 }} label="Your Phone Number" type="tel" {...register('phoneNumber')} required fullWidth />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Details;
