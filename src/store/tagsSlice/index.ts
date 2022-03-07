import { createSlice } from '@reduxjs/toolkit';

import * as actions from '@src/store/tagsSlice/actions';
import {
  newTag,
  sortTags,
} from '@src/store/tagsSlice/process';

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

export const tagsReducer = tagsSlice.reducer;
