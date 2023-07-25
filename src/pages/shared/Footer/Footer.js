import React from "react";
import {
  Email,
  Facebook,
  Image,
  Instagram,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import "../../../Styles/Style.css";
import image1 from "../../../img/g-1.jpg";
import image2 from "../../../img/g-2.jpg";
import image3 from "../../../img/g-3.jpg";
import image4 from "../../../img/g-4.jpg";
import image5 from "../../../img/g-5.jpg";
import image6 from "../../../img/g-6.jpg";
import logo from "../../../img/logo.png";

const Footer = () => {
  const images = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
    { img: image5 },
    { img: image6 },
  ];
  const iconStyle = {
    color: "orange",
    marginRight: "8px",
  };
  return (
    <div className="footer-bg">
      <Container maxWidth="lg" sx={{mt:5}}>
        <Grid container spacing={3}>
          {/* section one  */}
          <Grid item xs={12} md={3} className="footer-text">
            <div>
              <img src={logo} style={{ width: "50%" }} alt="" />
            </div>
            <div              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <List>
                <ListItem>
                <Typography gutterBottom display="flex">
              <LocationOn style={iconStyle} />
              123 Main St, Anytown, USA
            </Typography>
                </ListItem>
                <ListItem>
                <Typography gutterBottom display="flex">
              <Phone style={iconStyle} />
              (123) 456-7890
            </Typography>
                </ListItem>

                <ListItem>
                <Typography gutterBottom display="flex">
              <Email style={iconStyle} />
              info@naturen01.com
            </Typography>
                </ListItem>
              </List>
            </div>
          
          </Grid>

          {/* links sections  */}
          <Grid item xs={12} md={3} className="footer-text">
            <Typography
              sx={{ fontSize: "22px", fontWeight: "bold", color: "#FFBC62" }}
              gutterBottom
            >
              Quick Links
            </Typography>

            <div
              className="link"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <List>
                <ListItem>
                  <Link href="#" underline="none" color="inherit">
                    About Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" underline="none" color="inherit">
                    Contact with us
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="#" underline="none" color="inherit">
                    Our Services
                  </Link>
                </ListItem>
              </List>
            </div>
          </Grid>
          {/* Gallery section  */}
          <Grid item xs={12} md={2} className="footer-text">
            <Typography
              sx={{ fontSize: "22px", fontWeight: "bold", color: "#FFBC62" }}
              gutterBottom
            >
              Our Gallery
            </Typography>
            <ImageList cols={3} gap={5} rowHeight="auto">
              {images.map((image) => (
                <ImageListItem key={image.img}>
                  <img src={image.img} alt="" />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          {/* subscription section  */}
          <Grid item xs={12} md={4} className="footer-text">
            <Typography
              sx={{ fontSize: "22px", fontWeight: "bold", color: "#FFBC62" }}
              gutterBottom
            >
              Subscribe
            </Typography>
            <Typography gutterBottom>
              Subscribe to our newsletter for updates on the latest news and
              offers.
            </Typography>
            <form
              method="POST"
              target="_blank"
              style={{ marginTop: "4%", display: "flex" }}
            >
              <TextField
                name="email"
                size="small"
                placeholder="Enter your email"
                sx={{ backgroundColor: "white" }}
              />

              <Button
                type="submit"
                sx={{
                  padding: "2%",
                  marginLeft: "2%",
                  backgroundColor: "#FFBC62",
                  color: "white",
                }}
              >
                Subscribe
              </Button>
            </form>
            <div style={{ marginTop: "4%" }}>
              <Typography
                sx={{ fontSize: "22px", fontWeight: "bold", color: "#FFBC62" }}
                gutterBottom
              >
                Connect with us
              </Typography>
              <IconButton
                aria-label="Facebook"
                style={{ color: "white", padding: "2%" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                style={{ color: "white", padding: "2%" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                style={{ color: "white", padding: "2%" }}
              >
                <Instagram />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Typography className="footer-text" style={{ textAlign: "center" }}>
          {" "}
          Copyright © 2023 .All rights reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;