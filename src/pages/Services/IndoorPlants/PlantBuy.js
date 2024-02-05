import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Grid, Button, Card, CardContent, CardMedia, TextField } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import "../../../Styles/Style.css"
import { UserContext } from '../../../Authentication/userContext';
const PlantBuy = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { handleSubmit, register, setValue } = useForm();
    const { userId } = useContext(UserContext)

    useEffect(() => {
        // Fetch  id wise
        fetch(`https://nature-nexus.onrender.com/product/${id}`)
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
        data.productId = id;
        data.userId = userId;
    
        try {
            // Send your data to the server using axios or other method
            const response = await axios.post("https://nature-nexus.onrender.com/purchase", data);
            console.log('Response:', response.data);
            Swal.fire(
                'Good job!',
                'You Successfully placed the order.Please Keep ready the money when you recived your percel',
                'success'
            );
            window.href("/");
                } catch (error) {
            console.error('Error:', error);
        }
    };

      
    return (
        <Grid className='update' container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5} lg={4}>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Card className='update-card' sx={{ mt: 10, mb: 5 }}>
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
                                sx={{ width: "100%", mb: 2 }}
                                fullWidth
                                variant="outlined"
                                label="Name"
                                id="name"
                                {...register('name')}
                                readOnly
                            />
                            <TextField
                                required
                                sx={{ width: "100%", mb: 2 }}
                                fullWidth
                                variant="outlined"
                                label="Description"
                                id="description"
                                multiline
                                readOnly
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
                                readOnly
                                {...register('price')}
                            />
                            <TextField sx={{ mb: 3 }} label="Your Name" type="text" {...register('customerName')} required fullWidth />
                            <TextField sx={{ mb: 3 }} label="Your Phone Number" type="tel" {...register('phoneNumber')} required fullWidth />
                            <TextField sx={{ mb: 3 }} label="Your Address" type="tel" {...register('address')} required fullWidth />

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
                            Buy
                        </Button>
                    </Card>

                </form>
            </Grid>
        </Grid>

    );
};

export default PlantBuy;
