
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UserContext } from "./userContext";
import axios from "axios";
import React, { useContext, useState } from "react";

import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
  } from "@mui/material";
const defaultTheme = createTheme();

const SignUp = () => {
    const { setIsLoggedIn } = useContext(UserContext); // Access the UserContext
  
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      name: "",
      address: "",
    });
  
    const handleInputChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault(); //for form submission event
      const { name, email, password, address } = formData;
      if (!name || !email || !password || !address) {
        alert("Please fill in all the required fields.");
        return;
      }
      
    // Password validation using regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.");
      return;
    }
  
  
  
      axios
        .post("http://localhost:8000/register", formData) // Pass the formData in the request
        .then((res) => {
          alert(res.data.message);
          const token = res.data.token;
          // Store the token in local storage or a cookie
          localStorage.setItem("token", token);
          setIsLoggedIn(true);
          setFormData({
            name: "",
            email: "",
            password: "",
            address: "",
          });
          window.location.href = "/";
        })
        .catch((err) => {
          console.error("Error registering user:", err);
          if (
            err.response &&
            err.response.data &&
            err.response.data.error === "User already exists"
          ) {
            alert("User already exists. Please choose a different email.");
          } else {
            alert("Registration failed. Please try again.");
          }
        });
    };
  
    const handleTogglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "100%", mb: 1 }}
              id="standard-basic-1"
              label="Your Name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              variant="standard"
              required
            />
            <TextField
              sx={{ width: "100%", mb: 1 }}
              id="standard-basic-1"
              label="Your address"
              name="address"
              onChange={handleInputChange}
              value={formData.address}
              variant="standard"
              required
            />
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
            {/* <NavLink to="/pass">
              <Button sx={{ width: "100%", background: "#F6FAFD", mt: 2 }}>
                Forgot Password?
              </Button>
            </NavLink> */}
            <Button
              sx={{ width: "100%", mb: 1, mt: 2 }}
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "rgba(4, 9, 30, 0.7)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SignUp
            </Button>
            <NavLink to="/login">
              <Button sx={{ width: "100%", background: "#F6FAFD", mt: 2 }}>
                Already have an account? Go to login
              </Button>
            </NavLink>
          </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default SignUp;
