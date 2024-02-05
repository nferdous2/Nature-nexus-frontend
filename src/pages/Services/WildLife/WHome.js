import React, { useEffect, useState } from 'react'
import Waboutus from './Waboutus'
import WildlifeBanner from './WildlifeBanner/WildlifeBanner'
import { Grid, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { FcExpand } from "react-icons/fc"
import faq from "../../../img/TV.png"
import Blogs from './Blogs'
import Animals from './Animals'
import Review from '../Freshfarm/Review'

const WHome = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    // Fetch all products from your API
    fetch('https://nature-nexus.onrender.com/review')
      .then((response) => response.json())
      .then((data) => {
        // Filter the products with the "freshfood" category
        const reviews = data.filter((product) => product.category === 'animal');
        setReview(reviews);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  return (
    <div>
      <WildlifeBanner />
      <Waboutus />
      <Animals />
      {/* Accordion */}
      <div>
        <Typography
          sx={{ color: '#000000a4', fontSize: '3rem', fontWeight: 600 }}
        >
          F<span style={{ color: '#f8bf02' }}> A </span> Q
        </Typography>
        <Grid container spacing={2} sx={{ pt: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={faq} alt="" style={{ width: '50%' }} />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} style={{ marginTop: '5%' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <FcExpand
                    style={{
                      borderRadius: '25px',
                      padding: '2px',
                      backgroundColor: '#F3F1EF',
                      fontSize: '24px',
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Why should I adopt instead of buying a pet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Adopting a pet saves a life and helps reduce the demand for
                  pets from commercial breeders. It's a compassionate choice and
                  gives animals in shelters a second chance at a loving home.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <FcExpand
                    style={{
                      borderRadius: '25px',
                      padding: '2px',
                      backgroundColor: '#F3F1EF',
                      fontSize: '24px',
                    }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  What should I consider before adopting a pet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Consider your lifestyle, the time you can dedicate to a pet,
                  the space available, and the specific needs of the animal.
                  It's important to ensure a good match and to be ready for the
                  responsibilities of caring for a pet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <FcExpand
                    style={{
                      borderRadius: '25px',
                      padding: '2px',
                      backgroundColor: '#F3F1EF',
                      fontSize: '24px',
                    }}
                  />
                }
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>
                  How can I help rescue animals without adopting?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can volunteer at shelters, donate to animal rescue
                  organizations, foster animals, or simply spread awareness
                  about the importance of adoption and the needs of rescue
                  animals.import Animal from './Animal';
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <FcExpand
                    style={{
                      borderRadius: '25px',
                      padding: '2px',
                      backgroundColor: '#F3F1EF',
                      fontSize: '24px',
                    }}
                  />
                }
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>
                  What if my adopted pet has special needs?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Many adopted pets may require special care or have unique
                  needs. It's essential to have patience, seek advice from
                  professionals, and provide the necessary support and love to
                  help them thrive.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
      <Review review={review}></Review>

{/* blogs */}

<Blogs/>
    </div>
  )
}

export default WHome
