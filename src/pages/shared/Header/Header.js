import * as React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';
import { NavLink, } from 'react-router-dom';
import logo from '../../../img/logo.png';
import { UserContext } from '../../Authentication/userContext';
import { useContext } from 'react';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const { isLoggedIn, handleLogout } = useContext(UserContext);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 50; // Adjust the threshold as needed
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    backgroundColor: isScrolled ? 'rgba(4, 9, 30, 0.7)' : 'rgba(4, 9, 30, 0.7)',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    boxShadow: isScrolled ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none',
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        ...navbarStyle,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} className="logo" />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                  width: '300px',
                  textAlign: 'left',
                },
              }}
            >
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                        color:"white",
                      }
                      : {color:"white",}
                  }
                  to="/"
                  className="headerLink"
                >
                  Home
                </NavLink>
              </Button>
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
                onMouseEnter={handleOpenServicesMenu}
              >
                Services
              </Button>
              <Menu
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleCloseServicesMenu}>
                  <NavLink
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    exact
                    to="/service1"
                  >
                    Service 1
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseServicesMenu}>
                  <NavLink
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    exact
                    to="/service2"
                  >
                    Service 2
                  </NavLink>
                </MenuItem>
              </Menu>
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                        color: "white",
                      }
                      : { color: "white", }
                  }
                  to="/feedback"
                  className="headerLink"
                >
                  Gallery
                </NavLink>
              </Button>
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                        color: "white",
                      }
                      : { color: "white", }
                  }
                  to="/contact"
                  className="headerLink"
                >
                  Contact Us
                </NavLink>
              </Button>
              {/* Conditionally render "SignUp" or "Logout" based on the user's login status */}
              {isLoggedIn ? (
                // If user is logged in, show "Logout"
                <Typography
                  sx={{
                    fontSize: 18,
                    display: 'block',
                    color: "white",
                    width: '300px',
                    textAlign: 'left',
                  }}
                  onClick={handleLogout}

                >
                  Logout
                </Typography>
              ) : (
                // If user is not logged in, show "SignUp"
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                        color: "white",
                      }
                      : {
                        color: "white",
                      }
                  }
                  to="/signup"
                  className="headerLink"
                >
                  SignUp
                </NavLink>

              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              margin: 'auto',
            }}
          >
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                    color: '#f8bf02',
                    fontFamily: 'times new roman',
                  }
                  : {color:"white",fontFamily: 'times new roman' }
              }
              to="/"
              className="headerLink"
            >
              Home
            </NavLink>

            <Button
              color="inherit"
              onMouseEnter={handleOpenServicesMenu}
              onMouseLeave={handleCloseServicesMenu}
              sx={{
                fontWeight: 'bold',
                fontFamily: 'times new roman',
                fontSize: 16,
                marginTop: '-10px',
                marginLeft: '-12px',
                marginRight: '12px',
                cursor: 'pointer',
              }}
            >
              Services
              <Menu
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleCloseServicesMenu}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#f8bf02',
                          textDecoration: 'none',
                          fontFamily: 'times new roman',
                        }
                        : {
                          color: 'black',
                          textDecoration: 'none',
                          fontFamily: 'times new roman',
                        }
                    }
                    exact
                    to="/freshfarm"
                  >
                    Fresh Farm
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseServicesMenu}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#f8bf02',
                          textDecoration: 'none',
                          fontFamily: 'times new roman',
                        }
                        : {
                          color: 'black',
                          textDecoration: 'none',
                          fontFamily: 'times new roman',
                        }
                    }
                    exact
                    to="/service2"
                  >
                    Wild Life
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseServicesMenu}>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: '#f8bf02',
                          textDecoration: 'none',
                          fontFamily: 'times new roman',
                        }
                        : {
                          color: 'black',
                          textDecoration: 'none',
                          fontFamily: 'times new roman',
                        }
                    }
                    exact
                    to="/service2"
                  >
                    Tree Plant
                  </NavLink>
                </MenuItem>
              </Menu>
            </Button>

            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                    color: '#f8bf02',
                    fontFamily: 'times new roman',
                  }
                  : { color: "white", fontFamily: 'times new roman ' }
              }
              to="/cart"
              className="headerLink"
            >
              Cart
            </NavLink>

            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                    color: '#f8bf02',
                    fontFamily: 'times new roman',
                  }
                  : { color: "white", fontFamily: 'times new roman ' }
              }
              to="/contact"
              className="headerLink"
            >
              Contact Us
            </NavLink>

            {/* Conditionally render "SignUp" or "Logout" based on the user's login status */}
            {isLoggedIn ? (
              // If user is logged in, show "Logout"

              <Typography
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
                onClick={handleLogout}

              >
                Logout
              </Typography>
            ) : (
              // If user is not logged in, show "SignUp"
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                      color: "white",
                    }
                    : { color: "white", }
                }
                to="/signup"
                className="headerLink"
              >
                SignUp
              </NavLink>

            )}
          </Box>

          {/* user menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Button
                  sx={{
                    display: 'block',
                  }}
                >
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: 'black',
                        }
                        : { color: '#0d284e' }
                    }
                    to="/dashboard"
                    className="headerLink"
                  >
                    Dashboard
                  </NavLink>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
