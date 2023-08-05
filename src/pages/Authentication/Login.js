import React, { useContext, useState } from "react";
import login from "../../img/login.png";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UserContext } from "./userContext";
import axios from "axios";

const Login = () => {
  const { setIsLoggedIn } = useContext(UserContext); // Access the UserContext

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
        console.log("Token set:", token);

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
    <Container sx={{ p:5}}>
      <Grid container spacing={2}>
        {/* Left column with form */}
        <Grid item xs={12} md={6} sx={{marginTop:"20%" }}>
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
            <NavLink to="/pass">
              <Button sx={{ width: "100%", background: "#F6FAFD",mt:2 }}>
                Forgot Password?
              </Button>
            </NavLink>
            <Button
              sx={{ width: "100%", mb: 1,mt:3 }}
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "green",
                color: "white",
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
        </Grid>

        {/* Right column with image */}
        <Grid item xs={12} md={6} sx={{marginTop:"15%"}}>
          <img src={login} alt="login image" style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
