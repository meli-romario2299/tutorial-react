import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  gifs: []
}

export const imagesSlide = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setGifs: (state, action) => {
     state.gifs = action.payload;
     state.isLoading = false;
    },
    getGifsLoading: (state) => {
      state.isLoading = true;
    }
  },
});

export const { setGifs, getGifsLoading } = imagesSlide.actions

export default imagesSlide.reducer;