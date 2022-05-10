import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageService from '../../service/image.service';

const initialState = {
    images: [],
    favorites: [],
    favoritesAsObjects: [],
    status: 'idle',
}

export const fetchImages = createAsyncThunk(
    'images/fetchAllImages',
    async () => {
        const images = await imageService.fetchImages();

        return images;
    }
);

const imageSlice = createSlice({
    name: 'galery',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorite: (state, action) => {
            state.favorites.splice(action.payload, 1);
        },
        addToFavoriteAsObject: (state, action) => {
            state.favoritesAsObjects.push(action.payload);
        },
        removeFromFavoriteasObject: (state, action) => {
            state.favoritesAsObjects.splice(action.payload, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.images = action.payload;
                state.status = 'idle';
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.status = 'rejected';
                state.images = action.payload;
            })

    }
})

export const { addToFavorite, removeFromFavorite, addToFavoriteAsObject, removeFromFavoriteasObject } = imageSlice.actions;

export const selectImages = (state) => state.galery.images;
export const selectFavorites = (state) => state.galery.favorites;
export const selectFavoritesAsObjects = (state) => state.galery.favoritesAsObjects;

export default imageSlice.reducer;