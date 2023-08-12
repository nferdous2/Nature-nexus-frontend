import React from "react";
import {
  Typography,
  Grid,

  Box,
} from "@mui/material";
import {

  CardGiftcard,
  Undo,
  LocalShipping,
  Headset,
} from "@mui/icons-material";
import "../../Styles/Style.css"; // Import the external CSS file

const styles = {
  paper: {
    boxShadow: "none",
    border: "none",
    display: "flex",
    height: "150%",
    borderRadius: "5px",
    alignItems: "center",
  },
};

const Facilities = () => {
  return (
    <Box sx={{ flexGrow: 2, p: 5, overflow: "hidden" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <Box sx={{ ...styles.paper, bgcolor: "white", }} className="iconPaper">
            <div className="iconBlock">
              <LocalShipping style={{ marginTop: "35%" }} />
            </div>
            <Typography variant="h6" sx={{ m: 3 }}>
              Free shipping
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <Box sx={{ ...styles.paper, bgcolor: "white" }} className="iconPaper">
            <div className="iconBlock">
              <CardGiftcard style={{ marginTop: "35%" }} />
            </div>
            <Typography variant="h6" sx={{ m: 3 }}>
              Gift voucher
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <Box sx={{ ...styles.paper, bgcolor: "white" }} className="iconPaper">
            <div className="iconBlock">
              <Headset style={{ marginTop: "35%" }} />
            </div>
            <Typography variant="h6" sx={{ m: 3 }}>
              24/7 Live support
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <Box sx={{ ...styles.paper, bgcolor: "white" }} className="iconPaper">
            <div className="iconBlock">
              <Undo style={{ marginTop: "35%" }} />
            </div>
            <Typography variant="h6" sx={{ m: 3 }}>
              30 Days return
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Facilities;
