import React, { Fragment } from 'react';

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from '../search/SearchInput';
import { Link } from 'react-router-dom';

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
              component={Link}
              to={'/'}
              sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'left', color: 'black', textDecoration: 'none' }}
            >
                My Galery Collection
            </Typography>
            <Typography
              variant='h6'
              noWrap
              component={Link}
              to={'/favorites'}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'left', color: 'black', ml: 5, textDecoration: 'none' }}  
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