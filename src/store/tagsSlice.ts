import {
  createSlice,
  Draft,
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

type TagDialog = NullableType<'delete' | 'edit'>;

type InitialState = {
  activeDialog: TagDialog,
  activeIndex: number,
  data: Tag[],
};

/**
 * Generate a unique key for a tag.
 */
const tagKey = () => uuid({ prefix: 'tag' });

const newTag = (name: string): Tag => ({
  name,
  index: -1,
  key: tagKey(),
});

const initialState: InitialState = {
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

type DraftState = Draft<InitialState>;

const updateActiveIndex = (state: DraftState, action: PayloadAction<number>) => {
  const index = action.payload;
  if (index < 0 || index >= state.data.length) {
    state.activeIndex = -1;
  }

  state.activeIndex = index;
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
    ...state,
    data: sorted,
  });
};

type ActiveDialogPayload = {
  dialog: TagDialog,
  index?: number,
};

export const tagsSlice = createSlice({
  name: 'counter',
  initialState: {
    ...initialState,
    data: sortTags(initialState),
  },
  reducers: {
    setActiveDialog: (state, action: PayloadAction<ActiveDialogPayload>) => {
      const { dialog, index } = action.payload;

      state.activeDialog = dialog;
      state.activeIndex = Number(index) > -1 ? 0 : -1;
    },
    setActiveIndex: updateActiveIndex,
    addTag: (state, action: PayloadAction<NewTag>) => {
      const tag = action.payload;

      if (!tag.name || tagExists(state, tag)) {
        return;
      }

      state.data.push(newTag(tag.name));
      state.data = sortTags(state);
    },
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
