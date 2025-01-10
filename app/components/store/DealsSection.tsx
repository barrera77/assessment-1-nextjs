'use client';

import { Box, Container, Grid2, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  unitPrice: number;
  img_url: string;
}

const DealsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', paddingY: '2rem' }}>
          <Typography
            variant="h4"
            textAlign={'center'}
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}
          >
            This Week&apos;s Deals
          </Typography>
        </Box>
        <Box sx={{}}>
          <Grid2 container spacing={2}>
            <Grid2>
              <ProductCard />
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default DealsSection;
