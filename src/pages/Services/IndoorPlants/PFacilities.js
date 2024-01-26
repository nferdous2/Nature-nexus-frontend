import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { PiPottedPlantLight, PiPlantThin } from "react-icons/pi";

const PFacilities = () => {
    return (
        <div>
        {/* types of plants  */}
        <Box sx={{ flexGrow: 2, p: 5, overflow: "hidden" }}>
            <Grid container spacing={{ xs: 2, md: 2 }}>
                {/* extra grid  */}
                <Grid md={1} lg={1}></Grid>
                {/* main grid 1 */}

                <Grid item xs={6} md={2} lg={2}>
                    <PiPottedPlantLight style={{ fontSize: "5rem", color: "#306B4A " }} />
                    <Typography variant="h6" sx={{ color: "#497C5C", mt: 3 }}>
                        OFFICE PLANTS
                    </Typography>
                </Grid>
                {/* 2nd grid  */}

                <Grid item xs={6} md={2} lg={2}>
                    <PiPottedPlantLight style={{ fontSize: "5rem", color: "#306B4A " }} />
                    <Typography variant="h6" sx={{ color: "#497C5C", mt: 3 }}>
                        FLORAL & TABLETOP
                    </Typography>
                </Grid>
                {/* 3rd grid  */}

                <Grid item xs={6} md={2} lg={2}>
                    <PiPottedPlantLight style={{ fontSize: "5rem", color: "#306B4A " }} />
                    <Typography variant="h6" sx={{ color: "#497C5C", mt: 3 }}>
                        PLANTERS RANGE
                    </Typography>
                </Grid>
                {/*4th grid  */}

                <Grid item xs={6} md={2} lg={2}>
                    <PiPottedPlantLight style={{ fontSize: "5rem", color: "#306B4A " }} />
                    <Typography variant="h6" sx={{ color: "#497C5C", mt: 3 }}>
                        LIVING WAYS
                    </Typography>
                </Grid>
                {/* 5th grid  */}

                <Grid item xs={6} md={2} lg={2}>
                    <PiPottedPlantLight style={{ fontSize: "5rem", color: "#306B4A " }} />
                    <Typography variant="h6" sx={{ color: "#497C5C", mt: 3 }}>
                        TROPICAL PLANTS
                    </Typography>
                </Grid>
                {/* extra grid  */}

                <Grid md={1} lg={1}></Grid>

            </Grid>
        </Box>

        {/* service section  */}

        <Box sx={{ flexGrow: 2, p: 5, overflow: "hidden" }}>
            <Typography variant="h4" sx={{ color: "#306B4A", mt: 5, mb: 5, textAlign: "center", fontWeight: "bold" ,
                textShadow: "5px 5px  #00000040"}}>
                OUR SERVICES
            </Typography>
            <Grid container spacing={{ xs: 2, md: 4 }}>
                {/* main grid 1 */}
                <Grid item xs={6} md={3} lg={3}>
                    <PiPlantThin style={{ fontSize: "5rem", color: "#306B4A ", backgroundColor: "#C6E9D3", padding: "4%", borderRadius: "100%" }} />
                    <Typography variant="h6" sx={{ color: "#306B4A", mt: 3, fontWeight: "bold" }}>
                        INTERIOR PLANT <br /> SERVICE
                    </Typography>
                    <Typography variant="h6" sx={{ color:"#8AB29C", mt: 3, fontWeight: "bold" }}>
                        This item includes installation and<br /> maintenace
                    </Typography>
                </Grid>
                {/* 2nd grid  */}
                <Grid item xs={6} md={3} lg={3}>
                    <PiPlantThin style={{ fontSize: "5rem", color: "#306B4A ", backgroundColor: "#C6E9D3", padding: "4%", borderRadius: "100%" }} />
                    <Typography variant="h6" sx={{ color: "#306B4A", mt: 3, fontWeight: "bold" }}>
                        INTERIOR LANDSCAPING <br /> DESIGN
                    </Typography>
                    <Typography variant="h6" sx={{color:"#8AB29C", mt: 3, fontWeight: "bold" }}>
                        We offer a complete range of  <br />design services.
                    </Typography>
                </Grid>
                {/* 3rd grid  */}

                <Grid item xs={6} md={3} lg={3}>
                    <PiPlantThin style={{ fontSize: "5rem", color: "#306B4A ", backgroundColor: "#C6E9D3", padding: "4%", borderRadius: "100%" }} />
                    <Typography variant="h6" sx={{ color: "#306B4A", mt: 3, fontWeight: "bold" }}>
                        SEASON HOLIDAY <br /> DECORATING
                    </Typography>
                    <Typography variant="h6" sx={{ color:"#8AB29C", mt: 3, fontWeight: "bold" }}>
                        We have a lot of creative & easy <br />decorating ideas.
                    </Typography>
                </Grid>
                {/*4th grid  */}

                <Grid item xs={6} md={3} lg={3}>
                    <PiPlantThin style={{ fontSize: "5rem", color: "#306B4A ", backgroundColor: "#C6E9D3", padding: "4%", borderRadius: "100%" }} />
                    <Typography variant="h6" sx={{ color: "#306B4A", mt: 3, fontWeight: "bold" }}>
                        LANDSCAPING <br />PRODUCTS
                    </Typography>
                    <Typography variant="h6" sx={{ color:"#8AB29C", mt: 3, fontWeight: "bold" }}>
                        We have a wide range of <br />landscaping products.
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    </div>
    );
};

export default PFacilities;