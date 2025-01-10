import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const ProductCard = () => {
  return (
    <Box
      sx={{
        padding: '.5rem',
        borderRadius: '7px',
        border: '1px solid #091d55',
      }}
    >
      <Card
        sx={{
          width: { xs: 250, sm: '270' },
          maxWidth: 270,
          maxHeight: 360,
          height: 360,
        }}
      >
        <CardMedia
          component="img"
          alt="product image"
          height="160"
          image="https://picsum.photos/200/300"
        />
        <CardContent sx={{ border: 'none' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: '#091d55' }}
          >
            Lizard
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              flexGrow: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
            }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: '#091d55' }}>
            Order This Item
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
