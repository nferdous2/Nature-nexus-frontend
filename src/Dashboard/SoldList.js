import { Button, Card, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import done from "../img/done.png";
import pending from "../img/clock.png"

// main code start 

const SoldList = () => {
  const [soldProducts, setSoldProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  //get how many products have been sold
  useEffect(() => {
    const fetchSoldProducts = async () => {
      try {
        const response = await fetch('https://nature-nexus-backend-sable.vercel.app/soldProduct');
        const data = await response.json();
        setSoldProducts(data);
      } catch (error) {
        console.error('Error fetching sold products:', error);
      }
    };
    fetchSoldProducts();
  }, []);

  //get all users with  their verified status
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://nature-nexus-backend-sable.vercel.app/users');
        const data = await response.json();
        setAllUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // delete user
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure to remove the user?')
    if (proceed) {
      fetch(`https://nature-nexus-backend-sable.vercel.app/user/${id}`, {
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
  // Count the number of products with paidStatus true and false
  const paidTrueCount = soldProducts.filter(product => product.paidStatus === true).length;
  const paidFalseCount = soldProducts.filter(product => product.paidStatus === false).length;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={4} lg={6}>
          <Card sx={{
            maxWidth: 345, p: 5, m: 3, display: 'flex',
            alignItems: 'center',
          }}>
            <img src={done} alt='' style={{ width: "30%", padding: "4px" }} />

            <Typography variant="h5">Payment Done: {paidTrueCount}</Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={6}>
          <Card sx={{
            maxWidth: 345, p: 5, m: 3, display: 'flex',
            alignItems: 'center',
          }}>
            <img src={pending} alt='' style={{ width: "30%", padding: "4px" }} />
            <Typography variant="h5">Pending: {paidFalseCount}</Typography>
          </Card>
        </Grid>

      </Grid>
      {/* users grid  */}
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", p: 5 }}>Users Details</Typography>

      <Grid container spacing={2}>

        {allUsers.map((user, index) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
            <Card sx={{
              p: 5, m: 3,
              alignItems: 'center',
            }}>
              <Typography variant="h6"><span style={{ fontWeight: "bold" }}>Name:</span> {user.name}</Typography>
              <Typography variant="h6"><span style={{ fontWeight: "bold" }}>Email:</span> {user.email}</Typography>
              <Typography variant="h6"><span style={{ fontWeight: "bold" }}>Verified Status:</span> {user.verified?.toString()}</Typography>
              <Button onClick={() => handleDelete(user._id)} sx={{
                backgroundColor: 'red', color: 'white', fontWeight: 'bold', '&:hover': {
                  backgroundColor: 'red',
                  cursor: 'pointer',
                },
              }}>
                Delete
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>

  );
};

export default SoldList;
