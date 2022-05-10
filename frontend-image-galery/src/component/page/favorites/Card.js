import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ButtonBase, CardActions, CardContent, CardMedia, Grid, ImageListItem, Typography } from '@mui/material';

import { addToFavorite, addToFavoriteAsObject, removeFromFavorite, removeFromFavoriteasObject, selectFavorites, selectFavoritesAsObjects } from '../../../features/images/imageSlice';

function Card() {
  const favoritesAsObjects = useSelector(selectFavoritesAsObjects);
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();

  const handleFavorite = (imageId, image) => {
    const index = favorites.indexOf(Number(imageId));

    if(!favorites.includes(imageId)) {
        dispatch(addToFavorite(imageId));
        dispatch(addToFavoriteAsObject(image));
    } else {
        dispatch(removeFromFavorite(index));
        dispatch(removeFromFavoriteasObject(index));
    }
  }

  return (
    <Grid item xs={10} sm container ml={4}>
      {favoritesAsObjects.map(image => (
      <Grid item container direction="column" spacing={2} key={image.id}>
        <Grid item xs={6}>
          <ImageListItem 
            key={image.id}
            sx={{ width: '200px',height: '50px', mb: 2 }}
            >
            <img
              src={`${image.url}?w=248&fit=crop&auto=format`}
              srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={image.title}
              loading="lazy"
            />
          </ImageListItem>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h5" component="div" mb={2} mt={2} align='left'>
            <ButtonBase
              sx={{ fontSize: '25px' }} >
                {image.title}
            </ButtonBase>
          </Typography>
            <Button 
              variant='outlined' 
              color='error' 
              onClick={(e) => handleFavorite(image.id, image)} 
              sx={{ display: 'flex', justifyContent: 'flex-end', ml: 40 }}>
              Remove from Favorite
            </Button>
        </Grid>
      </Grid>
      ))}
    </Grid>
  )
}

export default Card;