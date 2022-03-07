import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@src/store';
import * as actions from '@src/store/tagsSlice/actions';

import { newTag, sortTags } from '@src/store/tagsSlice/process';

const initialState: State.Tags.Store = {
  sort: 'name',
  sortDirection: 'asc',
  activeDialog: null,
  activeIndex: -1,
  data: [
    newTag('First', 'Order'),
    newTag('Second'),
    newTag('Third', 'Order'),
    newTag('Random', 'Vibes'),
    newTag('Cool', 'Vibes'),
    newTag('Fourth'),
    newTag('Fifth'),
    newTag('Edgy', 'Vibes'),
  ],
};

export const tagsSlice = createSlice({
  name: 'counter',
  initialState: {
    ...initialState,
    data: sortTags(initialState),
  },
  reducers: {
    addTag: actions.addTag,
    deleteTag: actions.deleteTag,
    editTag: actions.editTag,
    setActiveDialog: actions.setActiveDialog,
    setActiveIndex: actions.setActiveIndex,
  },
});

export const {
  addTag,
  deleteTag,
  editTag,
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
