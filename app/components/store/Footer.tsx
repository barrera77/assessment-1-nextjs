import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from '../store/styles.module.css';

const Footer = () => {
  return (
    <Box sx={{ py: '1.5rem' }}>
      <Typography sx={{ textAlign: 'center' }}>Follow us</Typography>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          margin: 'auto',
          mt: '1rem',
          mb: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            width: { xs: '50%', sm: 'auto' },
            margin: { xs: 'auto', sm: 'unset' },
          }}
        >
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <FacebookIcon />
            Facebook
          </Link>
        </Box>
        <Box
          sx={{
            width: { xs: '50%', sm: 'auto' },
            margin: { xs: 'auto', sm: 'unset' },
          }}
        >
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <YouTubeIcon />
            Youtube
          </Link>
        </Box>
        <Box
          sx={{
            width: { xs: '50%', sm: 'auto' },
            margin: { xs: 'auto', sm: 'unset' },
          }}
        >
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <InstagramIcon />
            Instagram
          </Link>
        </Box>
        <Box
          sx={{
            width: { xs: '50%', sm: 'auto' },
            margin: { xs: 'auto', sm: 'unset' },
          }}
        >
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <LinkedInIcon /> LinkedIn
          </Link>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '12px' }}>
          &copy; 2024 Manuel Alva.
        </Typography>
        <Typography sx={{ fontSize: '12px' }}>
          This website was created for academic purposes only. Any resemblance
          to other website or businesses, real or fictional, is purely
          coincidential
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
