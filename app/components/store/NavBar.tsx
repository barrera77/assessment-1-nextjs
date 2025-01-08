"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Badge, ButtonBase } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Link from 'next/link';

const isLogged = false;
const loggedInSettings = ['Profile', 'Account', 'Logout'];
const loggedOutSettings = ['Login'];

const settings = isLogged ? loggedInSettings : loggedOutSettings;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "transparent"}}>
      <Container maxWidth="xl" sx={{paddingY: ".5rem"}}>
        <Toolbar disableGutters>          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },              
              fontWeight: "900",             
              fontSize: {md: "2.5rem"},
              color: '#091d55', 
              textDecoration: 'none',
              fontFamily: "Oswald"
            }}
          >
            My e-Shop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: '#091d55'}}/>
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
              sx={{ display: { xs: 'block', md: 'none' }}}
            >
              
                <MenuItem onClick={handleCloseNavMenu} sx={{width: "120px"}}>
                  <Typography sx={{ textAlign: 'left', width: "100%"  }}>About</Typography>
                </MenuItem>               
                <PopupState variant="popover" popupId="popup-menu">
                {(popupState) => (
                    <React.Fragment>                      
                      <MenuItem sx={{width: "120px", textAlign: "center"}}>
                        <ButtonBase 
                        sx={{ my: 2, display: 'flex', fontSize: {md: "1rem"}, width: "100%" }}
                          {...bindTrigger(popupState)}
                        >
                            <Typography sx={{ textAlign: 'left', width: "100%"  }}>Shop</Typography>                          
                            <ExpandMoreIcon />
                        </ButtonBase>
                      </MenuItem>
                    
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Electronics</MenuItem>
                        <MenuItem onClick={popupState.close}>Furniture</MenuItem>
                        <MenuItem onClick={popupState.close}>Home Appliances</MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>             
            </Menu>
          </Box>          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,              
              fontWeight: 700,
              color: '#091d55',
              textDecoration: 'none',
              fontSize: {xs: "1.25rem", sm: "1.75rem"},
              fontFamily: "Oswald"

            }}
          >
            My e-Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: {md:"1.5rem"}, justifyContent: "center"}}>
            <Button sx={{ my: 2, display: 'flex' }}>
              <Typography sx={{fontFamily: "Oswald", color: '#091d55', fontWeight: "800", fontSize: {md: "1.25rem"}}}>About</Typography>
            </Button>
            <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>                      
                  <Button   endIcon={<ExpandMoreIcon />} 
                    sx={{ my: 2, color: '#091d55', display: 'flex'}}
                    {...bindTrigger(popupState)}
                  >
                    <Typography sx={{fontFamily: "Oswald", color: '#091d55', fontWeight: "800", fontSize: {md: "1.25rem"}}}>Shop</Typography>                          
                  </Button>
                      
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Electronics</MenuItem>
                    <MenuItem onClick={popupState.close}>Furniture</MenuItem>
                    <MenuItem onClick={popupState.close}>Home Appliances</MenuItem>
                </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
           <Box sx={{display: "flex", gap: {xs: ".5rem", sm: "1.5rem"}, alignItems: "center"}}>
              <Tooltip title="Go to Cart">
               <Link href="/shopping-cart" passHref>
                  <IconButton                
                  aria-label="show 17 new notifications"
                  sx={{color: '#091d55', fontWeight: "600"}}                
                  >
                    <Badge badgeContent={17} color="error">
                      <ShoppingCartRoundedIcon sx={{fontSize: "2rem", "&:hover": {backgroundColor: "#091d55", color: "#fff"}}}/>
                    </Badge>
                  </IconButton>
               </Link>
                </Tooltip>
  
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}  sx={{color: '#091d55', fontSize: "1.5rem", fontWeight: "600",  "&:hover": {backgroundColor: "#fff", color: "#091d55"}}}>
                    <Avatar alt="User" sx={{fontSize: "1.5rem", backgroundColor: "#091d55", "&:hover": {color: "#091d55", backgroundColor: "#fff"}}}/>
                  </IconButton>
                </Tooltip>
           </Box>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;