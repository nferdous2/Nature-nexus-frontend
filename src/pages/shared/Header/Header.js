import React, { useContext, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../../../Authentication/userContext'

//main code start here

function Header() {
  const { isLoggedIn, handleLogout } = useContext(UserContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenSubMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const navbarStyle = {
    backgroundColor: 'rgba(4, 9, 30, 0.7)',
  }

  return (
    <AppBar
      position="fixed"
      style={{
        ...navbarStyle,
        overflow: 'hidden',
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize: '24px',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: '#FFB800' }}>Nature</span>{' '}
            <span style={{ color: '#34DF46 ' }}>Nexus</span>
          </Typography>

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
                display: { xs: 'block', md: 'none' },
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                <MenuItem sx={{ color: 'black', fontSize: '20px' }}>
                  Home
                </MenuItem>
              </NavLink>
              <MenuItem
                onClick={handleOpenSubMenu}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '20px',
                }}
              >
                Service
              </MenuItem>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* Manually added menu items */}
                <Link to="/freshfarm" style={{ textDecoration: 'none' }}>
                  <MenuItem
                    sx={{
                      color: 'black', // Set text color to black
                      fontSize: '20px',
                    }}
                  >
                    Freshfarm
                  </MenuItem>
                </Link>
                <Link exact to="/wildlife" style={{ textDecoration: 'none' }}>
                  <MenuItem
                    sx={{
                      color: 'black', // Set text color to black
                      fontSize: '20px',
                    }}
                  >
                    WildLife
                  </MenuItem>
                </Link>
                <Link exact to="/service2" style={{ textDecoration: 'none' }}>
                  <MenuItem
                    sx={{
                      color: 'black', // Set text color to black
                      fontSize: '20px',
                    }}
                  >
                    Tree Plant
                  </MenuItem>
                </Link>
              </Menu>

              {isLoggedIn && (
                <NavLink
                  to="/dashboard"
                  style={{
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  <MenuItem sx={{ color: 'black', fontSize: '20px' }}>
                    Dashboard
                  </MenuItem>
                </NavLink>
              )}
              {isLoggedIn ? (
                <>
                  <Typography
                    onClick={handleLogout}
                    sx={{ color: 'white', mr: 2, cursor: 'pointer' }}
                  >
                    Logout
                  </Typography>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    style={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    <MenuItem mr={2} sx={{ color: 'black', fontSize: '20px' }}>
                      Create Account
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    <MenuItem mr={2} sx={{ color: 'black', fontSize: '20px' }}>
                      Login
                    </MenuItem>
                  </NavLink>
                </>
              )}
              <MenuItem sx={{ color: 'black', fontSize: '20px' }}>
                Contact us
              </MenuItem>
            </Menu>
          </Box>

          {/* From here user menu for large devices start  */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 3,
              fontFamily: 'monospace',
              fontSize: '24px',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: '#FFB800' }}>Nature</span>{' '}
            <span style={{ color: '#34DF46 ' }}>Nexus</span>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <MenuItem sx={{ color: 'White', fontSize: '20px' }}>
                Home
              </MenuItem>
            </Link>

            <MenuItem
              onClick={handleOpenSubMenu}
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Service
            </MenuItem>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* Manually added menu items */}
              <Link to="/freshfarm" style={{ textDecoration: 'none' }}>
                <MenuItem
                  sx={{
                    color: 'black', // Set text color to black
                    fontSize: '20px',
                  }}
                >
                  Freshfarm
                </MenuItem>
              </Link>
              <Link exact to="/wildlife" style={{ textDecoration: 'none' }}>
                <MenuItem
                  sx={{
                    color: 'black', // Set text color to black
                    fontSize: '20px',
                  }}
                >
                  WildLife
                </MenuItem>
              </Link>
              <Link exact to="/service2" style={{ textDecoration: 'none' }}>
                <MenuItem
                  sx={{
                    color: 'black', // Set text color to black
                    fontSize: '20px',
                  }}
                >
                  Tree Plant
                </MenuItem>
              </Link>
            </Menu>

            {/* Conditionally render the "Dashboard" option */}
            {isLoggedIn && (
              <NavLink
                to="/dashboard"
                style={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                <MenuItem sx={{ color: 'white', fontSize: '20px' }}>
                  Dashboard
                </MenuItem>
              </NavLink>
            )}
            <NavLink
              to="/contactus"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              <MenuItem sx={{ color: 'white', fontSize: '20px' }}>
                ContactUs
              </MenuItem>
            </NavLink>
            {/* <MenuItem sx={{ color: 'white', fontSize: '20px' }}>
              Contact us
            </MenuItem> */}
          </Box>

          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {isLoggedIn ? (
              <>
                <Typography
                  onClick={handleLogout}
                  sx={{
                    color: 'white',
                    mr: 2,
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </Typography>
              </>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  style={{
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  <MenuItem mr={2} sx={{ color: 'White', fontSize: '20px' }}>
                    Create Account
                  </MenuItem>
                </NavLink>{' '}
                <Link to="login">
                  <Button
                    sx={{
                      ml: 4,
                      borderRadius: '10px',
                      textTransform: 'capitalize',
                      backgroundColor: '#FFB800', // Default background color
                      color: 'black', // Text color
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#FFB800', // Keep the same background color on hover
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
