import React, { useState, useEffect, } from 'react';
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import { UserContext } from '../../../Authentication/userContext';
import { Link } from 'react-router-dom';


const Products = ({ product }) => {
  const { userRole } = React.useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from your API
    fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => {
        //get all products category by plants
        const freshFoodProducts = data.filter((product) => product.category === 'plants');
        setProducts(freshFoodProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // delete product 
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure to delete order?')
    if (proceed) {
      fetch(`http://localhost:8000/product/${id}`, {
        method: 'DELETE'
      }).then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('Deleted Successfully ')
            window.location.reload()

          }
        })
    }
  }

  return (
    <Box sx={{ p: 3, overflow: 'hidden' }}>
      <Typography variant="h4" sx={{ color: "#306B4A", mt: 3, mb: 5, fontWeight: "bold", textShadow: "4px 4px  #00000040" }}>FEATURED PLANTS</Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={12} md={3} lg={3}>
            {userRole === 'admin' ? (
              <>
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 200, height: 250, alignSelf: 'center' }}
                    image={product.image}
                    alt={`${product.name} cover`}
                  />
                  <CardContent>
                    <Typography sx={{ color: "#8AB29C", fontSize: "20px", fontWeight: "bold" }}>
                      {product.name}
                    </Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                      Price: $ {product.price}
                    </Typography>
                    {/* Buttons  */}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Button onClick={() => handleDelete(product._id)} sx={{
                        backgroundColor: 'red', color: 'white', fontWeight: 'bold', mr:5,'&:hover': {
                          backgroundColor: 'red',
                          cursor: 'pointer',
                        },
                      }}>
                        Delete
                      </Button>
                      {/* goes to product detail page on dashboard */}

                      <Link to={`/pdetail/${product._id}`} >
                        <Button sx={{
                          backgroundColor: '#306B4A', color: 'white', fontWeight: 'bold', '&:hover': {
                            backgroundColor: '#306B4A',
                            cursor: 'pointer',
                          },
                        }}>
                          Update
                        </Button>
                      </Link>

                    </div>
                  </CardContent>
                </Box>


              </>
            ) : (
              <>
                {/* for user  */}
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 200, height: 250, alignSelf: 'center' }}
                    image={product.image}
                    alt={`${product.name} cover`}
                  />
                  <CardContent>
                    <Typography sx={{ color: "#8AB29C", fontSize: "20px", fontWeight: "bold" }}>
                      {product.name}
                    </Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                      Price: $ {product.price}
                    </Typography>
                    <Link to={`/plantBuy/${product._id}`} >
                      <Button variant="contained" sx={{ fontWeight: "bold", background: "#3B8F60", mt: 3 }}>Buy Now</Button>
                    </Link>
                  </CardContent>
                </Box>


              </>
            )}

          </Grid>
        ))}

      </Grid>

    </Box>
  );
};

export default Products