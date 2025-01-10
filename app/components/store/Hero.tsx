import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { bannerImage } from '@/app/assets';

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          marginBottom: '4rem',
          height: { md: '50vh', lg: '65vh' },
          backgroundImage:
            'linear-gradient( 109.6deg,  rgb(234, 240, 248) 11.2%, rgba(244,248,252,1) 91.1% )',
        }}
      >
        <Container sx={{ paddingY: '2.5rem', height: '100%' }} maxWidth="xl">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box sx={{ height: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    gap: { xs: '.5rem', sm: '.25rem' },
                  }}
                >
                  <Typography
                    variant="h2"
                    align="left"
                    sx={{
                      width: '100%',
                      fontSize: { xs: '2.5rem', sm: '3.5rem' },
                    }}
                  >
                    Welcome to
                  </Typography>
                  <Typography
                    variant="h1"
                    align="left"
                    sx={{
                      width: '100%',
                      fontSize: { xs: '4.75rem' },
                      fontWeight: '600',
                    }}
                  >
                    My e-Shop.
                  </Typography>
                  <Grid2
                    size={{ xs: 10, md: 6 }}
                    sx={{
                      margin: 'auto',
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    <Box sx={{ Width: '100%', paddingY: '1.5rem' }}>
                      <Image
                        src={bannerImage}
                        alt="banner-image"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Grid2>
                  <Typography variant="body1">
                    Elevate your home with My e-Shop! Discover the latest in
                    electronics and home appliances, from sleek smartphones to
                    innovative kitchen gadgets. <br />
                    <br />
                    <strong>Register </strong>
                    for news, promotions and a better shopping experience!
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      paddingTop: '1.5rem',
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    <Link href="/register" passHref>
                      <Button
                        sx={{
                          backgroundColor: 'rgba(9,29,85,1)',
                          color: '#fff',
                          border: '1px solid #091d55',
                          paddingX: '1.5rem',
                          fontWeight: '600',
                          '&:hover': {
                            backgroundColor: '#fff',
                            color: '#091d55',
                          },
                        }}
                      >
                        Register Now
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid2>
            <Grid2
              size={{ xs: 10, md: 6 }}
              sx={{ margin: 'auto', display: { xs: 'none', md: 'block' } }}
            >
              <Box sx={{ Width: '100%' }}>
                <Image
                  src={bannerImage}
                  alt="banner-image"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
