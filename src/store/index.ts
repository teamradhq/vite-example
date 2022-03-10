import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '@src/store/counterSlice';
import { tagsReducer } from '@src/store/tags';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tags: tagsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

