import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { Container } from "@mui/material";
import { LiaProductHunt } from "react-icons/lia";
import { BsPersonLinesFill, BsCart3 } from "react-icons/bs";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import LoginIcon from "@mui/icons-material/Login";
//pages 
import Admin from "./Admin";
import AddProduct from "./AddProduct";
import { UserContext } from "../Authentication/userContext";
import SoldList from "./SoldList";
import MyOrder from "./MyOrder";
import Feedback from "../pages/Feedback/Feedback";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

// main code start form here

export default function DashboardNav() {
    const [open, setOpen] = React.useState(true);
    const { handleLogout, userRole, } = React.useContext(UserContext);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // State to manage which component to render dynamically
    const [selectedComponent, setSelectedComponent] = React.useState(null);

    // add product 
    const handleproduct = () => {
        setSelectedComponent(<AddProduct />);
    };

    // add admin
    const handleadmin = () => {
        setSelectedComponent(<Admin />);
    };
    // See the total sold list
    const soldProductList = () => {
        setSelectedComponent(<SoldList />);
    };

    // see orders
    const handleOrder = () => {
        setSelectedComponent(<MyOrder />);
    };
    // see feedback
    const handleFeedback = () => {
        setSelectedComponent(<Feedback />);
    };

    // State ,it will show the order page first 
    React.useEffect(() => {
        // Set the default selected component when the page loads
        handleOrder();
    }, []);



    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{ background: "#fff", color: "#000" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            fontFamily: "monospace",
                            fontWeight: 800,
                            width: "90%",
                            display: "flex",
                            justifyContent: "center",
                            color: "#3EB143",
                        }}
                    >
                        <span style={{ color: "#FFB800" }}>Nature </span>Nexus
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Toolbar style={{ color: "#000" }}>
                        <Typography
                            variant="h6"
                            noWrap
                            href=""
                            sx={{
                                fontWeight: 600,
                                color: "#3EB143",
                                textDecoration: "none",
                            }}
                        >
                            <span style={{ color: "#FFB800" }}>Nature </span>Nexus
                        </Typography>
                    </Toolbar>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {/* Links for routing */}
                <List>
                    <NavLink
                        to="/"
                        style={{ textDecoration: "none", width: "100%", color: "#000" }}
                    >
                        <ListItem disablePadding>
                            <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                                <ListItemIcon>
                                    <FcHome style={{ color: "#000", fontSize: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                    {/*  view for user */}
                    <ListItem disablePadding>
                        <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                            <ListItemIcon>
                                <FaUser
                                    style={{
                                        color: "#000",
                                        fontSize: "1.5rem",
                                        marginRight: "1rem",
                                    }}
                                />
                                <ListItemText primary="See Your Options" />

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <TreeView
                        style={{
                            color: "#000",
                            background: "#fff",
                            textAlign: "justify",
                            paddingLeft: "2.5rem",
                            marginTop: "-2.4rem",
                        }}
                        aria-label="file system navigator"
                        defaultExpanded={["1"]}
                        defaultCollapseIcon={
                            <div style={{ padding: ".3rem 0", visibility: "hidden" }}>
                                <FaUser style={{ color: "#000", fontSize: "1.5rem" }} />
                            </div>
                        }
                        defaultExpandIcon={
                            <div style={{ padding: ".3rem 0", visibility: "hidden" }}>
                                <FaUser style={{ color: "#000", fontSize: "1.5rem" }} />
                            </div>
                        }
                        sx={{ height: 300, flexGrow: 1, maxWidth: 420, overflowY: "auto" }}
                    >

                        {userRole === 'admin' && (
                            <TreeItem
                                nodeId="1"
                                style={{ color: "#000", background: "#FFFFFF" }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton
                                        style={{ borderRadius: "0 40px 40px 0" }}
                                        onClick={handleproduct} // Handle click to render Profile dynamically
                                    >
                                        <ListItemIcon>
                                            <LiaProductHunt
                                                style={{ color: "#000", fontSize: "1.3rem" }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Add Product"
                                            style={{ marginLeft: "-1rem" }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        style={{ borderRadius: "0 40px 40px 0" }}
                                        onClick={handleadmin} // Handle click to render Profile dynamically
                                    >
                                        <ListItemIcon>
                                            <BsPersonLinesFill
                                                style={{ color: "#000", fontSize: "1.3rem" }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Add Admin"
                                            style={{ marginLeft: "-1rem" }}
                                        />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton
                                        style={{ borderRadius: "0 40px 40px 0" }}
                                        onClick={soldProductList} // Handle click to render Profile dynamically
                                    >
                                        <ListItemIcon>
                                            <BsCart3
                                                style={{ color: "#000", fontSize: "1.3rem" }}
                                            />
                                        </ListItemIcon>

                                        <ListItemText
                                            primary="Details"
                                            style={{ marginLeft: "-1rem" }}
                                        />
                                    </ListItemButton>
                                </ListItem>

                                <NavLink
                                    onClick={handleLogout}
                                    style={{ textDecoration: "none", width: "100%", color: "#000" }}
                                >
                                    <ListItem>
                                        <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                                            <ListItemIcon>
                                                <LoginIcon
                                                    style={{ color: "#000", fontSize: "1.5rem" }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary="Logout" />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                            </TreeItem>
                        )}

                        {userRole === 'user' && (
                            <TreeItem
                                nodeId="1"
                                style={{ color: "#000", background: "#FFFFFF" }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton
                                        style={{ borderRadius: "0 40px 40px 0" }}
                                        onClick={handleOrder} // Handle click to render Profile dynamically
                                    >
                                        <ListItemIcon>
                                            <LiaProductHunt
                                                style={{ color: "#000", fontSize: "1.3rem" }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="My Orders"
                                            style={{ marginLeft: "-1rem" }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        style={{ borderRadius: "0 40px 40px 0" }}
                                        onClick={handleFeedback} // Handle click to render Profile dynamically
                                    >
                                        <ListItemIcon>
                                            <BsPersonLinesFill
                                                style={{ color: "#000", fontSize: "1.3rem" }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Give Feedback"
                                            style={{ marginLeft: "-1rem" }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <NavLink
                                    onClick={handleLogout}
                                    style={{ textDecoration: "none", width: "100%", color: "#000" }}
                                >
                                    <ListItem>
                                        <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                                            <ListItemIcon>
                                                <LoginIcon
                                                    style={{ color: "#000", fontSize: "1.5rem" }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary="Logout" />
                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                            </TreeItem>
                        )}
                    </TreeView>

                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Container maxWidth="lg">
                    <Main open={open}>
                        <DrawerHeader />

                        <Container maxWidth="lg">
                            {/* Render the selected component */}
                            
                            {selectedComponent}
                        </Container>
                    </Main>
                </Container>
            </Main>

        </Box>
    );
}
