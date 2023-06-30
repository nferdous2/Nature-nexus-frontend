import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Grid container spacing={2} sx={{ p: 5, mb: 5, mx: 2 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 ,}}>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom>
            Who we are
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textAlign: "left", p: 2,letterSpacing:"3px" }}
          >
            Our mission is to conserve nature and reduce the most pressing
            threats to the diversity of life on Earth.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Divider
          sx={{
            my: 2,
            backgroundColor: "#f8bf02",
            height: "3px",
            borderRadius: "3px",
            width: "15%",
            
          }}
        />
        <Typography variant="h4" gutterBottom sx={{ textAlign: "left" }}>
          Our Impact
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "left",letterSpacing:"3px" }}>
          We collaborate with local communities to conserve the natural
          resources we all depend on and build a future in which people and
          nature thrive. Together with partners at all levels, we transform
          markets and policies toward sustainability, tackle the threats driving
          the climate crisis, and protect and restore wildlife and their
          habitats.
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            p: 2,
          }}
        >
          <Button
            sx={{
              mr: 4,
              width: "40%",
              color: "white",
              background: "#f8bf02",
              fontWeight: "bold",
              "&:hover": {
                background: "#FF7F00", // New background color when hovering
              },
            }}
          >
            Donate Now
          </Button>

          <Button
            sx={{
              mr: 4,
              width: "40%",
              color: "black",
              background: "transparent",
              fontWeight: "bold",
              border: "1px solid black",
            }}
          >
            More ways you can help
          </Button>
        </Grid>
      </Grid>

      {/* <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{ mt: 5, mb: 5, textAlign: "left" }}
      >
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 20 }}>
                How often is the magazine published?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Agro-Economy & Agro-Waste is a monthly magazine. 12 issues will
                be available each year.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 20 }}>
                What payment methods are supported for subscriptions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We accept payment via PayPal, VISA, Master Card, American
                Express, and other global and National (for Bangladesh: Bkash,
                Rocket, Nagad, Surecash, etc.) or contact us for more details.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 20 }}>
                How do I update my details?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can update your shipping and billing address, payment
                details and reset your password via your online account. You can
                also renew your subscription, and view your orders. You can also
                contact us and our subscription team will be happy to assist.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 20 }}>
                How do I give Agro-Economy & Agro-Waste subscription as a gift?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you wish to gift a Cosmos Magazine subscription to someone,
                you can do so easily via an eGift Subscription. Select the
                appropriate eGift Subscription based on the type of subscription
                you wish to give.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid> */}
    </Grid>
  );
};

export default AboutUs;
