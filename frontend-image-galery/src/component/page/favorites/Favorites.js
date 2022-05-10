import { Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectFavoritesAsObjects } from '../../../features/images/imageSlice'
import Progress from '../../layout/progress/Progress';
import Card from './Card';

const Favorites = () => {
  const favoritesAsObjects = useSelector(selectFavoritesAsObjects);
  const dispatch = useDispatch();

  return (
    <Fragment>
    <Typography variant="h6" sx={{ marginTop: '30px', fontSize: '30px' }}>Your Favorites</Typography>
      {favoritesAsObjects?.length < 1 ? (
        <Typography variant="h6">You still dont have any favorite images</Typography>
        ): (
            <Grid item container xs={10} sx={{ display: 'flex', justifyContent: 'flex-start', ml: 25 }}>
                <Card />
        </Grid>
      )}
      </Fragment>
  )
}

export default Favorites