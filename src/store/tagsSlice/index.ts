import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@src/store';
import * as actions from '@src/store/tagsSlice/actions';

import {
  newTag,
  sortTags,
} from '@src/store/tagsSlice/process';

const DEFAULT_GROUP = 'Ungrouped';

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

type TagGroups = {
  [key: string]: State.Tags.Tag[],
};

/**
 * Get the tags by their group.
 *
 * @param state
 */
export const selectGroupedTags = (state: RootState) => {
  /** Reduce tags to TagGroups object. */
  const groups = state.tags.data.reduce((result: TagGroups, current) => {
    const key = current.group || DEFAULT_GROUP;

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(current);

    return result;
  }, {});

  /** Generate map with unsorted group at the top. */
  const map = new Map([[DEFAULT_GROUP, [] as State.Tags.Tag[]]]);
  for (const key of Object.keys(groups).sort()) {
    map.set(key, groups[key]);
  }

  /** Generate array of sorted group entries. */
  const sorted: [
    keyof typeof groups,
    State.Tags.Tag[]
  ][] = [];
  for (const [key, value] of map.entries()) {
    sorted.push([key, value]);
  }

  return sorted;
};

export const tagsReducer = tagsSlice.reducer;
