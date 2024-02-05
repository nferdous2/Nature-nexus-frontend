import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
import { UserContext } from './userContext';

const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationMsg, setVerificationMsg] = useState('');
  const { setIsLoggedIn } = useContext(UserContext); // Access the UserContext

  const handleVerification = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post('https://nature-nexus.onrender.com/verify-otp', { email: email, otp: otp });
      if (response.status === 200) {
        alert('Congratulations. You successfully verified your account!');

        setIsLoggedIn(true);
        window.location.href = "/"; // Redirect to the home page after successful verification
      } else {
        setVerificationMsg('Failed to verify your code!');
      }
    } catch (error) {
      console.error(error);
      setVerificationMsg('An error occurred while verifying the code.');
    }
  };

  return (
    <Box sx={{ marginTop: "8%", marginBottom: "15%" }}>
 ``````````````````````````````````````     {/* for styles */}
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: "10%",
          width: "100%",
          height: "100%",
          zIndex: -1,
          transform: "rotate(360deg)", // Rotate the SVG 180 degrees to flip it upside down
        }}
      >
        <path
          opacity="0.14"
          d="M1439.06 244.889V54.3183C1425.89 47.2518 1412.31 40.9853 1398.39 35.553C1337.73 12.125 1271.56 7.13626 1207.1 9.13176C1142.65 11.1273 1079.72 20.1646 1018.66 40.9638C958.531 61.4561 902.081 91.3118 848.337 124.928C796.531 157.374 743.535 189.725 682.691 201.678C622.673 213.536 563.499 201.678 509.486 173.972C420.878 128.516 354.374 45.4153 258.705 12.7966C205.882 -5.1821 147.821 -2.70692 94.2106 10.8778C66.5998 18.0348 33.9619 29.1827 13.4313 49.8476C8.39558 55.022 3.89564 60.6919 0 66.771L0 244.889H1439.06Z"
          fill="#0D6EFD"
        />
      </svg>``````````````````````````````````````
      {/* end bg style  */}
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
              Enter Your OTP Code
            </Typography>
            <Typography>{verificationMsg}</Typography>
          {/* form start here  */}
            <form onSubmit={handleVerification}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Verification Code"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                fullWidth
                margin="normal"
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
                Verify
              </Button>
            </form>
          </Grid>
        </Grid>
    </Box>
  );
};

export default OTPVerification;
