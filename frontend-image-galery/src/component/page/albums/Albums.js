import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Typography } from '@mui/material';
import { fetchImages, selectImages } from '../../../features/images/imageSlice';
import { Box } from '@mui/system';

import pagination from './pagination';
import Progress from '../../layout/progress/Progress';
import { Link } from 'react-router-dom';

const Albums = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();
  
  const [album, setAlbum] = useState([]);
  const [countPages, setCountPages] = useState(0);
  const [page, setPage] = useState(1);
  
  const albumsPerPage = 12;
  const useAlbums = pagination(album, albumsPerPage)
  
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch])
  
  useEffect(() => {
    const orderedAlbums = images.reduce((acc, album) => {
      acc[album.albumId - 1]
        ? acc[album.albumId - 1].push(album)
        : acc[album.albumId - 1] = []

      return acc;
    }, []);
    
    setAlbum(orderedAlbums);
  }, [images])
  
  useEffect(() => {
    setCountPages(Math.ceil(album.length / albumsPerPage));
  }, [album])
  
  const handleChange = (e, page) => {
    setPage(page);
    useAlbums.jumpToPage(page);
  }
  
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Box>
        <Pagination
          count={countPages}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          color="primary"
          sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}
          onChange={handleChange}
        />
        <Grid container spacing={4}>
          {useAlbums.currentAlbums().map((album, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} sx={{mb: 1.5}}>
              {!album && <Progress />}
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                <Link to={`album/${album[0].albumId}/images`}>
                  <CardMedia
                    component="img"
                    image={album[0].url}
                    loading="lazy"
                  />
                </Link>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Album #{album[0].albumId}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component={Link}
                    to={`album/${album[0].albumId}/images`}
                    >
                      View Images
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Albums;