import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Box, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        image:"",
        category: "",

    });

    const handleAddProduct = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8000/products", formData)
            .then((res) => {
                alert(res.data.message);
                const token = res.data.token;
                localStorage.setItem("token", token);
                setFormData({
                    name: "",
        price: "",
        image:"",
        category: "",
                });  // Access the UserContext
            })
            .catch((err) => {
                console.error("Error registering user:", err);
            });
    };

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <Box sx={{ marginTop: "8%", marginBottom: "15%" }}>

            {/* main code starts here */}

            <Grid
                container
                justifyContent="center"
                sx={{
                    mt: 5,
                    textAlign: 'center',
                }}
            >
                <Grid item xs={12} md={4}>
                    <Typography sx={{ fontWeight: 600, fontSize: 32 }}>
                        Add New Product
                    </Typography>
                    {/* form start here  */}
                    <form onSubmit={handleAddProduct}>
                        <TextField
                            sx={{ width: "100%", mb: 1 }}
                            id="standard-basic-1"
                            label="Product Name"
                            name="name"
                            onChange={handleInputChange}
                            value={formData.name}
                            variant="standard"
                            required
                        />
                      
                      <TextField
                            sx={{ width: "100%", mb: 1 }}
                            id="standard-basic-1"
                            label="Price"
                            name="price"
                            onChange={handleInputChange}
                            value={formData.price}
                            variant="standard"
                            required
                        />
                          <TextField
                            sx={{ width: "100%", mb: 1 }}
                            id="standard-basic-1"
                            label="Img URL"
                            name="image"
                            onChange={handleInputChange}
                            value={formData.image}
                            variant="standard"
                            required
                        />
                          <TextField
                            sx={{ width: "100%", mb: 1 }}
                            id="standard-basic-1"
                            label="Category"
                            name="category"
                            onChange={handleInputChange}
                            value={formData.category}
                            variant="standard"
                            required
                        />
                        <Button fullWidth type="submit" sx={{
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            fontSize: "20px"
                            , backgroundColor: "#FFB800",
                            color: "black",
                            "&:hover": {
                                backgroundColor: "#FFB800",
                            },
                        }}>
                            Add Product
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddProduct;
