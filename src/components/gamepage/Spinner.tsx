import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '300px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}/>
    </Box>
  );
}