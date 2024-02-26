import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import "../Styles/Style.css"
const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",

    });


    const handleAddProduct = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/products", formData)
            .then((res) => {
                alert(res.data.message);
                const token = res.data.token;
                localStorage.setItem("token", token);
                setFormData({
                    name: "",
                    price: "",
                    image: "",
                    category: "",
                    description: "",
                });
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
                            label="Img URL"
                            name="image"
                            onChange={handleInputChange}
                            value={formData.image}
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: "100%", mb: 1 }}
                            label="Product Description"
                            name="description"
                            onChange={handleInputChange}
                            value={formData.description}
                            variant="standard"
                            required
                        />


                        <Typography sx={{fontWeight:"bold",textAlign:"left"}}>
                            Select the Category
                        </Typography>
                        <Select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            style={{ width: '100%' }}
                        >
                            <MenuItem value="" disabled>
                                Category
                            </MenuItem>
                            <MenuItem value="freshfood">Fresh Food</MenuItem>
                            <MenuItem value="animal">Animal</MenuItem>
                            <MenuItem value="plants">Indoor Plant</MenuItem>

                        </Select>
                        <Button fullWidth type="submit" sx={{
                            marginTop: 5,
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
