import * as React from 'react';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BasicRating } from './RatingStar';
import { useNavigate } from 'react-router-dom';


export const ProductCard = ({ event }) => {

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, p: 3, boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}>

      <CardMedia
        component="img"
        height="194"
        image={event.product_image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {event.product_name}
        </Typography>

        <BasicRating number={event.rating} />
        <Typography variant="h5" color="text.secondary">{event.price}/-</Typography>
      </CardContent>
      <Button
        sx={[
          {
            boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
            m: 1,
            color: "#ffffff",
            bgcolor: "#222222",
          },
          () => ({ "&:hover": { color: "#fafafa", bgcolor: "#474747" } }),
        ]}
        //   sx={{ color: "#ff0077" }}
        onClick={() => {
          navigate(`/product/${event._id}`);
        }}
      >
        View More
      </Button>

    </Card>
  );
}
