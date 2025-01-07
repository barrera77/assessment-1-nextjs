import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'

const DealsSection = () => {
  return (
    <Box>
       <Container maxWidth="xl">
           <Box sx={{width: "100%", paddingY: "2rem"}}>
                <Typography variant='h4' textAlign={"center"}>
                    This Week&apos;s Deals
                </Typography>
           </Box>
         <Box sx={{}}>
              <Grid2 container spacing={2}>
        
                <Grid2 >
                    <ProductCard />
                </Grid2>
                
                
              </Grid2>
         </Box>
       </Container>
    </Box>
  )
}

export default DealsSection
