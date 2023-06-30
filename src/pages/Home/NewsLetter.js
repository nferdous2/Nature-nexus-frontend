import React from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
  Grid,
  IconButton,
  Container,
  Paper,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  CardGiftcard,
  Undo,
  LocalShipping,
  Headset,
} from "@mui/icons-material";
import "../../Styles/Style.css"; // Import the external CSS file
// import { hover } from "@testing-library/user-event/dist/hover";

const NewsLetter = () => {
  return (
    <Container sx={{ overflow: "hidden" }}>
      <Grid
        container
        spacing={2}
        sx={{
          p: 5,
          "&.nbg": {
            borderRadius: "15px",
            backgroundSize: "cover", // Added property for covering the full section
          },
        }}
        className="nbg"
      >
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ color: "white" }}>
            Subscribe For Newsletter
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl sx={{ backgroundColor: "white" }} variant="outlined">
            <InputLabel htmlFor="email-input">Enter your email</InputLabel>
            <OutlinedInput
              id="email-input"
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              }
              label="Enter your email"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <IconButton
            aria-label="Facebook"
            style={{ color: "white", padding: "2%", fontSize: "24px" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            style={{ color: "white", padding: "2%", fontSize: "24px" }}
          >
            <Twitter />
          </IconButton>
          <IconButton aria-label="Instagram">
            <Instagram
              style={{ color: "white", padding: "2%", fontSize: "24px" }}
            />
          </IconButton>
        </Grid>
      </Grid>
    

    </Container>
  );
};

export default NewsLetter;
