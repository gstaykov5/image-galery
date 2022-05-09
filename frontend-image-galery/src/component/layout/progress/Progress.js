import * as React from 'react';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Progress = () => {
  return (
    <Stack sx={{ color: 'grey.500' }}>
      <CircularProgress color="success" />
    </Stack>
  );
}

export default Progress;
