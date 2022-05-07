import React, { Fragment } from 'react';

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from '../search/SearchInput';

const Navbar = () => {

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: '#d1d3d4'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'left', color: 'black' }}
            >
                My Galery Collection
            </Typography>
            <Typography
              variant='h6'
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'left', color: 'black', ml: 5 }}  
            >
              Favorites
            </Typography>

            <SearchInput />

          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  )
}

export default Navbar;