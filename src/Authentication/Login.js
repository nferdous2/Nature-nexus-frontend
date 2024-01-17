import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
import { UserContext } from './userContext';
const defaultTheme = createTheme();


const Login = () => {
  const { setIsLoggedIn,setLoading,setUserRole } = useContext(UserContext); // Access the UserContext

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    if ( !email || !password ) {
      alert("Please fill in all the required fields.");
      return;
    }
    axios
      .post("http://localhost:8000/login", formData) // Pass the formData in the request
      .then((res) => {
        alert(res.data.message);
        const token = res.data.token;
        // Store the token in local storage or a cookie
        localStorage.setItem("token", token);
        localStorage.setItem("userId", res.data.userId);

        // console.log("Token set:", token);
        setLoading(false);
        localStorage.setItem('userRole', res.data.role);

        setIsLoggedIn(true);
        setFormData({
          email: "",
          password: "",
        });
        window.location.href = "/";
      })
      .catch((err) => {
        console.error("Error logging in:", err);
        alert("Login failed. Please check your credentials and try again.");
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
              Log in
            </Typography>
         <form onSubmit={handleSubmit}>
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
         
            <Button
              sx={{ width: "100%", mb: 1,mt:3 }}
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "rgba(4, 9, 30, 0.7)",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>

            <NavLink to="/signup">
              <Button sx={{ width: "100%", background: "#F6FAFD",mt:2 }}>
                Are you new? Go to register
              </Button>
            </NavLink>
          </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
};

export default Login;
