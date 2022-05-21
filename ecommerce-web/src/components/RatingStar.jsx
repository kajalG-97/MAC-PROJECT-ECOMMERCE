import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export const BasicRating = ({ number }) => {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >


      <Rating name="read-only" value={number} readOnly />

    </Box>
  );
}
