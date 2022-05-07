import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageService from '../../service/image.service';

const initialState = {
    images: [],
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
    reducer: {},
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

export const selectImages = (state) => state.galery.images;

export default imageSlice.reducer;