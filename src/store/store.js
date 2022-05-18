import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import imagesReducer from '../store/imagesSlider'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images: imagesReducer
  },
})