import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageService from '../../service/image.service';

const initialState = {
    images: [],
    favorites: [1],
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
        addTofavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorite: (state, action) => {
            state.favorites.pop(action.payload);
        }
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

export const { addTofavorite, removeFromFavorite } = imageSlice.actions;

export const selectImages = (state) => state.galery.images;
export const selectFavorites = (state) => state.galery.favorites;

export default imageSlice.reducer;