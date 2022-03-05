import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@src/store';
import * as actions from '@src/store/tagsSlice/actions';

import {
  newTag,
  sortTags,
} from '@src/store/tagsSlice/process';

const initialState: State.Tags.Store = {
  activeDialog: null,
  activeIndex: -1,
  data: [
    newTag('First'),
    newTag('Second'),
    newTag('Third'),
    newTag('Fourth'),
    newTag('Fifth'),
  ],
};

export const tagsSlice = createSlice({
  name: 'counter',
  initialState: {
    ...initialState,
    data: sortTags(initialState),
  },
  reducers: {
    setActiveDialog: actions.setActiveDialog,
    setActiveIndex: actions.setActiveIndex,
    addTag: actions.addTag,
  },
});

export const {
  addTag,
  setActiveDialog,
  setActiveIndex,
} = tagsSlice.actions;

export const selectTags = (state: RootState) => state.tags.data;
export const selectActiveDialog = (state: RootState) => state.tags.activeDialog;
export const selectActiveIndex = (state: RootState) => state.tags.activeIndex;
export const selectActiveTag = (state: RootState) => (
  state.tags.data[selectActiveIndex(state)] || null
);
export const tagsReducer = tagsSlice.reducer;
