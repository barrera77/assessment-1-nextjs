import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { bannerImage } from '@/app/assets'

const Hero = () => {
  return (
    <Box>
        <Container>
            <div>
              <div >
                <h1>Welcome to <span>My e-Shop:</span></h1>
                <p >
                  Elevate your home with My e-Shop! Discover the latest in
                  electronics and home appliances, from sleek smartphones to
                  innovative kitchen gadgets. <br /><strong>Register</strong>
                  for news and promotions!
                </p>
                <a
                  href="#registration"
                >
                  Register Now
                </a>
              </div>
              <div >
                <div >
                  <Image
                    src={bannerImage}
                    alt="electronics"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </div>
        </Container>
      
    </Box>
  )
}

export default Hero
