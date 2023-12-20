import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Features/MovieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
