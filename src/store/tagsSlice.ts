import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { uuid } from '@src/services/uuid';

import type { RootState } from '@src/store';

type Tag = {
  name: string,
  key: string,
  index: number,
  group?: string,
}

type NewTag = Partial<Tag> & Pick<Tag, 'name'>

/**
 * Generate a unique key for a tag.
 */
const tagKey = () => uuid({ prefix: 'tag' });

type InitialState = {
  activeIndex: number,
  data: Tag[],
};

const newTag = (name: string): Tag => ({
  name,
  index: -1,
  key: tagKey(),
});

const initialState: InitialState = {
  activeIndex: -1,
  data: [
    newTag('First'),
    newTag('Second'),
    newTag('Third'),
    newTag('Fourth'),
    newTag('Fifth'),
  ],
};

/**
 * Tag exists if it has a key or index, or if there's already a tag with the
 * same name.
 *
 * @param state
 * @param tag
 */
const tagExists = (state: InitialState, tag: NewTag): boolean => {
  const isExisting = state.data.some(({ name }) => (
    name.toLowerCase() === tag.name.toLowerCase()
  ));

   return Boolean(
     isExisting
     || tag.key
     || Number(tag.index || -1) > -1,
   );
};

/**
 * Reindex tags based on their current order.
 *
 * @param state
 */
const reindexTags = (state: InitialState): InitialState['data'] => {
  return state.data.map(({ name, key }, index) => ({
    name,
    index,
    key,
  }));
};

/**
 * Sort tags alphabetically.
 *
 * @param state
 */
const sortTags = (state: InitialState): InitialState['data'] => {
  const sorted = state.data.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }

    return -1;
  });

  return reindexTags({
    activeIndex: state.activeIndex,
    data: sorted,
  });
};

export const tagsSlice = createSlice({
  name: 'counter',
  initialState: {
    ...initialState,
    data: sortTags(initialState),
  },
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index < 0 || index >= state.data.length) {
        state.activeIndex = -1;
      }

      state.activeIndex = index;
    },
    addTag: (state, action: PayloadAction<NewTag>) => {
      const tag = action.payload;

      if (!tag.name || tagExists(state, tag)) {
        return;
      }

      state.data.push({
        ...tag,
        index: state.data.length,
        key: tagKey(),
      });

      state.data = sortTags(state);
    },
  },
});

export const {
  addTag,
  setActiveIndex,
} = tagsSlice.actions;

export const selectTags = (state: RootState) => state.tags.data;
export const selectActiveIndex = (state: RootState) => state.tags.activeIndex;
export const selectActiveTag = (state: RootState) => (
  state.tags.data[selectActiveIndex(state)] || null
);
export const tagsReducer = tagsSlice.reducer;
