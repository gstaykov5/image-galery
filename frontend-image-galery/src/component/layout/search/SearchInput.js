import React, { Fragment } from 'react';

import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  border: '1px solid black',
  borderRadius: '5px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 10, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '15ch',
      },
    },
  },
}));

const SearchInput = () => {
  return (
    <Fragment>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search title"
          inputProps={{ 'aria-label': 'search' }}
        />
        <Button
        variant="outlined" 
        color="success" 
        sx={{m: '10px', color: 'green', display: { xs: 'none', sm: 'inline' } }}
        >
          Search
        </Button>
      </Search>
    </Fragment>
  )
}

export default SearchInput;