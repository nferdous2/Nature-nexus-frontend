import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Grid, Button, Card, CardContent, CardMedia, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import "../Styles/Style.css"
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    // Fetch  id wise
    fetch(`http://localhost:8000/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);

        // Set default values for form fields
        setValue('name', data.name || '');
        setValue('image', data.image || '');
        setValue('price', data.price || '');
        setValue('description', data.description || '');
        // console.log('Image URL:', data.image);
        // console.log('Data:', data);

      })
      .catch((error) => console.error('Error fetching product description:', error));
  }, [id, setValue]);

  /// if null
  if (!product) {
    return <div>Loading...</div>;
  }

  //form submit
  const onSubmit = async (data) => {
    try {
      // Send your data to the server using axios or other method
      const response = await axios.put(`http://localhost:8000/products/${id}`, data);
      console.log('Response:', response.data);
  
      // Show SweetAlert success message
      Swal.fire({
        title: 'Good job!',
        text: 'Product Updated Successfully',
        icon: 'success',
      }).then((result) => {
        // Check if the user clicked 'OK'
        if (result.isConfirmed || result.isDismissed) {
          // Redirect to home
          window.location.href = "/";
        }
      });
    } catch (error) {
      console.error('Error updating product description:', error);
    }
  };
  

  return (
    <Grid className='update' container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={5} lg={4}>

        <form onSubmit={handleSubmit(onSubmit)}>

          <Card className='update-card' sx={{ mt: 10,mb:5 }}>
            <CardContent>
              <CardMedia
                style={{
                  height: '20%',
                  width: '30%',
                  margin: 'auto',
                  objectFit: 'cover',
                  
                }}
                component="img"
                height="140"
                image={product.image} 
                alt="Your Image"
              />
              <TextField
                required
                sx={{ width: "100%", mb: 2 ,mt:5}}
                fullWidth
                variant="outlined"
                label="Product Image URL"
                id="image"
                {...register('image')}

              />
              <TextField
                required
                sx={{ width: "100%", mb: 2 }}
                fullWidth
                variant="outlined"
                label="Name"
                id="name"
                {...register('name')}
              />
              <TextField
                required
                sx={{ width: "100%", mb: 2 }}
                fullWidth
                variant="outlined"
                label="Description"
                id="description"
                multiline

                {...register('description')}
              />

              <TextField
                required
                sx={{ width: "100%", mb: 2 }}
                fullWidth
                type="number"
                variant="outlined"
                label="Price"
                id="price"
                {...register('price')}
              />
            </CardContent>
            <Button
              type="submit"
              sx={{
                width: "50%",
                borderRadius: "10px",
                mb: 5,
                textTransform: "capitalize",
                fontSize: "20px"
                , backgroundColor: "#FFB800",
                color: "black",
                "&:hover": {
                  backgroundColor: "#FFB800",
                },
              }}
            >
              Update information
            </Button>
          </Card>

        </form>
      </Grid>
    </Grid>

  );
};

export default ProductDetails;
