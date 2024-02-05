import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Box, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Admin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",

    });
    const [showPassword, setShowPassword] = useState(false);

    const handleAdmin = (event) => {
        event.preventDefault();

        axios
            .post("https://nature-nexus.onrender.com/admin", formData)
            .then((res) => {
                alert(res.data.message);
                const token = res.data.token;
                localStorage.setItem("token", token);
                setFormData({
                    email: "",
                    password: "",
                });  // Access the UserContext
            })
            .catch((err) => {
                console.error("Error registering user:", err);
            });
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
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
                            id="standard-basic-1"
                            label="Your mail"
                            name="email"
                            onChange={handleInputChange}
                            value={formData.email}
                            variant="standard"
                            required
                        />
                          
                        <TextField
                            sx={{ width: "100%", mb: 1 }}
                            id="standard-basic"
                            label="Your password"
                            name="password"
                            onChange={handleInputChange}
                            value={formData.password}
                            variant="standard"
                            required
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleTogglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
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
