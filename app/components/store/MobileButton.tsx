/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';

import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ShoppingBag, ShoppingBasket, ShoppingCart } from '@mui/icons-material';

const pages = ['Products', 'Pricing', 'Blog'];

const MobileButton = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'end',
      }}
    >
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
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map(page => (
          <MenuItem
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ width: '100%' }}
          >
            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </MenuItem>
    </Box>
  );
};

export default MobileButton;
