import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';

const Admin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",

    });
 
    const handleAdmin = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/admin", formData)
            .then((res) => {
                alert(res.data.message);
                const token = res.data.token;
                localStorage.setItem("token", token);
                setFormData({
                    email: "",
                    password: "",
                });  //reset
            })
            .catch((err) => {
                console.error("Error Adding admin:", err);
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
                        Add New Admin
                    </Typography>
                    {/* form start here  */}
                    <form onSubmit={handleAdmin}>
                        <TextField
                            sx={{ width: "100%", mb: 1 }}
                            label="Your mail"
                            name="email"
                            onChange={handleInputChange}
                            value={formData.email}
                            variant="standard"
                            required
                        />
                          
                        <TextField
                            sx={{ width: "100%", mb: 1 }}
                            label="Your password"
                            name="password"
                            onChange={handleInputChange}
                            value={formData.password}
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
                            Add Admin
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Admin;
