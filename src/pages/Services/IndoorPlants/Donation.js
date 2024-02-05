import "./TreePlanTationbanner.css"
import React, { useContext } from 'react';
import { Grid, Button, Card, CardContent, TextField, Typography,  } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import "../../../Styles/Style.css"
import { UserContext } from '../../../Authentication/userContext';
const Donation = () => {
    const { handleSubmit, register, reset } = useForm();
    const { userId } = useContext(UserContext)
 
    //submit

    const onSubmit = async (data) => {
        data.userId = userId;
        try {
            const response = await axios.post("https://nature-nexus.onrender.com/donation", data);
            console.log('Response:', response.data);
            Swal.fire(
                'Good job!',
                'We Will Reach You out soon',
                'success'
            );
           
            window.location.href="/";
           
            reset();

        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div style={{overflow:"hidden"}}>
        <Typography
          variant="h4"
          sx={{
            color: '#306B4A',
            mt: 3,
            mb: 15,
            fontWeight: 'bold',
            textShadow: '2px 2px  #00000040',
          }}
        >
          We Are Arranging Tree Plantation Week.
          <br />
          Do You want to contribute?
          <br />
          Then Please,Fill The Form 
        </Typography>
   <div className="donation">
   <Grid container spacing={2} justifyContent="center">
      <Grid item xs={8} md={6} lg={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ mt: 10, mb: 5, p: 3, backgroundColor: "rgba(4, 9, 30, 0.452)" }}>
            <CardContent>
              <TextField
              className="inputstyle"
                required
                sx={{ width: "100%", mb: 2 }}
                fullWidth
                variant="outlined"
                label="Name"
                id="name"
                {...register('name')}
              />
             
              <TextField
                className="inputstyle"
               sx={{ mb: 3 }}
               label="Your Phone Number"
                type="tel" 
                {...register('phoneNumber')} 
                required
                 fullWidth />
              <TextField 
                className="inputstyle"
              sx={{ mb: 3 }}
               label="Your Address" 
               type="tel" 
               {...register('address')} 
               required 
               fullWidth />
            </CardContent>
            <Button
              type="submit"
              sx={{
                width: "100%", // Full width on all screen sizes
                borderRadius: "10px",
                mb: 5,
                textTransform: "capitalize",
                fontSize: "20px",
                backgroundColor: "#FFB800",
                color: "black",
                "&:hover": {
                  backgroundColor: "#FFB800",
                },
              }}
            >
              Submit Form
            </Button>
          </Card>
        </form>
      </Grid>
    </Grid>
        </div>
        </div>
     
    );
};

export default Donation;