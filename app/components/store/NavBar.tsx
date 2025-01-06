
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppBar, Box, Container, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import MobileButton from './MobileButton'



const NavBar = () => {
   
    
  return (
    <Box>
        <AppBar>
           <Container sx={{minWidth: {lg: "75%"}}}>
                <Toolbar>
                    <Typography>
                        My e-Shop
                    </Typography>
                    <MobileButton />                   
                </Toolbar>                
           </Container>
        </AppBar>      
    </Box>
  )
}

export default NavBar
