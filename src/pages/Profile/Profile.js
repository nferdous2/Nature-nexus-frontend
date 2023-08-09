// import React, { useContext, useEffect, useState } from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import axios from "axios";

// import { Link } from "react-router-dom";
// import { UserContext } from "../Authentication/userContext";
// const Profile = () => {
//   const { isLoggedIn } = useContext(UserContext);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (isLoggedIn) {
//         const token = localStorage.getItem("token");
//         try {
//           const response = await axios.get("http://localhost:8000/user", {
//             headers: { Authorization: token },
//           });
//           setUser(response.data);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUser();
//   }, [isLoggedIn]);

//   if (!isLoggedIn) {
//     return null; // Return null or handle the case when the user is not logged in
//   }

//   return (
//     <Container
//       maxWidth="sm"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Card>
//         <CardHeader title="Your Profile" />
//         <CardContent>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Typography variant="h5" component="div">
//                 Name: {user?.name}
//               </Typography>{" "}
//             </Grid>
//             <Grid item xs={12}>
//               {user?.address && (
//                 <Typography variant="body1" component="div">
//                   Address: {user.address}
//                 </Typography>
//               )}{" "}
//             </Grid>
//             <Grid item xs={12}>
//               {user?.email && (
//                 <Typography variant="body1" component="div">
//                   Email: {user.email}
//                 </Typography>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               {user?.phone && (
//                 <Typography variant="body1" component="div">
//                   Phone: {user.phone}
//                 </Typography>
//               )}
//             </Grid>
         
//             <Grid item xs={12}>
//               <Link to="/updateinfo">
//                 <Button variant="contained" color="success" fullWidth>
//                   Update
//                 </Button>
//               </Link>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Profile;
