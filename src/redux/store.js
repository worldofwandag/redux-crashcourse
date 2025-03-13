import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from "./counterSlice.js"
import { postsApi } from './postSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [postsApi.reducerPath]: postsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});