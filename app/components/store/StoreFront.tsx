import React from 'react'
import { Container } from "@mui/material";
import Hero from "./Hero";
import DealsSection from './DealsSection';

const StoreFront = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <Hero />
        <DealsSection />
        <Container>
        {/*   <Footer /> */}
        </Container>
      </div>
  )
}

export default StoreFront
