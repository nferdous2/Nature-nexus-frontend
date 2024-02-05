import { Card, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import done from "../img/done.png";
import pending from "../img/clock.png"
const SoldList = () => {
  const [soldProducts, setSoldProducts] = useState([]);

  useEffect(() => {
    const fetchSoldProducts = async () => {
      try {
        const response = await fetch('https://nature-nexus.onrender.com/soldProduct');
        const data = await response.json();
        setSoldProducts(data);
      } catch (error) {
        console.error('Error fetching sold products:', error);
      }
    };

    fetchSoldProducts();
  }, []);

  // Count the number of products with paidStatus true and false
  const paidTrueCount = soldProducts.filter(product => product.paidStatus === true).length;
  const paidFalseCount = soldProducts.filter(product => product.paidStatus === false).length;

  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={12} md={4} lg={6}>
        <Card sx={{
          maxWidth: 345, p: 5, m: 3, display: 'flex',
          alignItems: 'center',
        }}>
          <img src={done} alt='' style={{width: "30%",padding:"4px" }} />

          <Typography variant="h5">Payment Done: {paidTrueCount}</Typography>
        </Card>
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={6}>
        <Card sx={{
          maxWidth: 345, p: 5, m: 3, display: 'flex',
          alignItems: 'center',
        }}>
          <img src={pending} alt='' style={{ width: "30%",padding:"4px" }} />
          <Typography variant="h5">Pending: {paidFalseCount}</Typography>
        </Card>
      </Grid>

    </Grid>
  );
};

export default SoldList;
