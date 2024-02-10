import React from 'react';
import logo from "../../../img/pawprint.webp";
import b1 from "../../../img/b1.webp";
import b2 from "../../../img/b2.webp";
import b3 from "../../../img/b3.webp"
import {Grid , Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Blogs = () => {
    return (
        <Box>
            <Box sx={{ mt: 4, mb: 5 }}>
                <img src={logo} alt='' />
                <Typography sx={{ color: "#f8bf02", fontWeight: "bold" }}>
                    Our News
                </Typography>
                <Typography sx={{ color: '#000000a4', fontSize: '3rem', fontWeight: 600, }}>
                    Latest News Update
                </Typography>
                <Typography sx={{ color: "gray" }}>

                    The best overall aniaml DNA test is Embark Breed & Health Kit (view at Chewy), which <br />
                    provides you with a breed brwn and information Most animals
                </Typography>
            </Box>

            <Grid container spacing={{ xs: 2, sm: 4, md: 2 }} sx={{ textAlign: "left",p:3 }}>
                <Grid item xs={12} md={4} lg={4} sm={12}>
                    <Card>
                        <CardMedia
                            sx={{ height: 340 }}
                            image={b1}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{ color: '#000000a4', fontSize: '2rem', fontWeight: 600, }}>
                                Everything your pet needs

                            </Typography>
                            <Typography variant='h6' color="text.secondary">
                                The domestic dog is a doiated dendant of the wolf. The dog derived                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography sx={{ color: '#000000a4', fontSize: '1.5rem', fontWeight: 600, }}>Read More</Typography>
                            <img src={logo} alt='' />
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4} sm={12}>
                    <Card>
                        <CardMedia
                            sx={{ height: 340 }}
                            image={b2}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{ color: '#000000a4', fontSize: '2rem', fontWeight: 600, }}>
                                Pets needs special foods too
                            </Typography>
                            <Typography variant='h6' color="text.secondary">
                                The domestic dog is a doiated dendant of the wolf. The dog derived                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography sx={{ color: '#000000a4', fontSize: '1.5rem', fontWeight: 600, }}>Read More</Typography>
                            <img src={logo} alt='' />
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4} sm={12}>
                    <Card>
                        <CardMedia
                            sx={{ height: 340 }}
                            image={b3}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{ color: '#000000a4', fontSize: '2rem', fontWeight: 600, }}>
                                Special Grades for carry home
                            </Typography>
                            <Typography variant='h6' color="text.secondary">
                                The domestic dog is a doiated dendant of the wolf. The dog derived                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography sx={{ color: '#000000a4', fontSize: '1.5rem', fontWeight: 600, }}>Read More</Typography>
                            <img src={logo} alt='' />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Blogs; 