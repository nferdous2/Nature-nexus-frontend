import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import logo from '../../../img/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import './Footer.css'
import img1 from '../../../img/g-1.jpg'
import img2 from '../../../img/g-10.jpg'
import img3 from '../../../img/g-3.jpg'
import img4 from '../../../img/started_img_n5.jpg'

const Footer = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="footerBox">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <img className="footerLogo" src={logo} alt="footerlogo" />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} sx={{}}>
            <Typography
              variant="h4"
              sx={{ color: 'white', textAlign: 'start' }}
            >
              Working Hours
            </Typography>
            <div className="workingHours">
              <ul>
                <li className="footerLi">
                  Sunday - Thursday <br />
                  <span className="footerSpan">9:00am - 5:00pm</span>
                </li>
              </ul>
              <ul>
                <li className="footerLi">
                  Only Friday <br />
                  <span className="footerSpan">03:00 pm - 09:00pm</span>
                  <br />
                  <span className="footerSpan2">Saturday Close</span>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              variant="h4"
              sx={{ color: 'white', textAlign: 'start' }}
            >
              Contact Us
            </Typography>
            <div className="contactUs">
              <LocationOnIcon
                sx={{ color: 'chocolate', fontSize: '35px', mt: 1 }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  textAlign: 'start',
                  marginLeft: 3,
                }}
              >
                <span className="footerSpan3">Location:</span>
                <br />
                55 Main Street, New York
              </Typography>
            </div>
            <div className="contactUs">
              <EmailIcon sx={{ color: 'chocolate', fontSize: '35px', mt: 1 }} />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  textAlign: 'start',
                  marginLeft: 3,
                }}
              >
                <span className="footerSpan3">Email Address :</span>
                <br />
                kaffendev@gmail.com
              </Typography>
            </div>
            <div className="contactUs">
              <PhoneIcon sx={{ color: 'chocolate', fontSize: '35px', mt: 1 }} />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  textAlign: 'start',
                  marginLeft: 3,
                }}
              >
                <span className="footerSpan3">Phone Number :</span>
                <br />
                +012 (345) 678 99
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              variant="h4"
              sx={{ color: 'white', textAlign: 'center', mb: 3 }}
            >
              Gallery
            </Typography>

            <div class="gallery">
              <div class="image">
                <img className="galleryImage" src={img1} alt="galleryImage" />
              </div>
              <div class="image">
                <img className="galleryImage" src={img2} alt="galleryImage" />
              </div>
              <div class="image">
                <img className="galleryImage" src={img3} alt="galleryImage" />
              </div>
            </div>
            <div class="gallery">
              <div class="image">
                <img className="galleryImage" src={img2} alt="galleryImage" />
              </div>
              <div class="image">
                <img className="galleryImage" src={img3} alt="galleryImage" />
              </div>
              <div class="image">
                <img className="galleryImage" src={img1} alt="galleryImage" />
              </div>
            </div>
          </Grid>
          <hr className="footerHr" />
          <p className="footerCopyrightText">
            &copy; 2023 Your Company Name. All Rights Reserved.
          </p>
        </Grid>
      </Box>
    </>
  )
}

export default Footer
