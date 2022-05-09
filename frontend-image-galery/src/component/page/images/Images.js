import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import LightBox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { selectImages } from '../../../features/images/imageSlice';
import Progress from '../../layout/progress/Progress';

const Images = () => {
  const images = useSelector(selectImages);
  const { albumId } = useParams();

  const [showLight, setShowLight] = useState(null);
  const [particularImgs, setParticularImgs] = useState([]);

  useEffect(() => {
    const imgs = images.filter(img => img.albumId === Number(albumId));
    setParticularImgs(imgs);
  }, [images, albumId]);

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };

  const handleFavorite = () => {

  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      marginTop={10}
    //   justify="center"
    >
        {!images && <Progress />}
      <ImageList sx={{ width: 800 }}>
      {particularImgs.map((image, index) => (
        <ImageListItem key={image.id} sx={{boxShadow: '2px 2px 10px black', ml: 2, mb: 2}} >
        <img
          src={`${image.url}?w=248&fit=crop&auto=format`}
          alt={image.id}
          loading="lazy"
          onClick={() => showLightBox(index)}
        />

        <ImageListItemBar
          sx={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          }}
          title={image.title}
          position="top"
          actionIcon={
            <IconButton
              sx={{ color: 'pink' }}
              onClick={() => handleFavorite(image.id)}>
              {/* {!user.favorites.includes(place._id) ? <FavoriteBorderSharpIcon /> :
              } */}
              <FavoriteRoundedIcon />
            </IconButton>
          }
          actionPosition="left"
        />

        <ImageListItemBar
          title={image.title}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${image.title}`}
            >
            </IconButton>
          }
        />
      </ImageListItem>
        ))}
        {showLight ? (
          <LightBox
            images={particularImgs.map((img) => ({ url: img.url, title: img.caption }))}
            startIndex={showLight.startIndex}
            onClose={hideLightBox}
          />
        ) : null}
      </ImageList>
    </Grid>
  )
}

export default Images;