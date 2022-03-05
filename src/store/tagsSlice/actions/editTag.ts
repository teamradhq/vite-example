import { Draft, PayloadAction } from '@reduxjs/toolkit';
import {
  tagExists,
  sortTags,
} from '@src/store/tagsSlice/process';
import { isIndexValid } from '@src/utils';

/**
 * Delete supplied tag from the store
 *
 * @param state
 * @param action
 */
export function editTag(state: Draft<State.Tags.Store>, action: PayloadAction<State.Tags.Tag>) {
  const tag = action.payload;
  const { index } = tag;
  const previous = state.data[index];

  if (tagExists(state, action.payload) && tag.name === previous.name) {
    return;
  }

  if (isIndexValid(state.data, index)) {
    state.data[index] = action.payload;
    state.data = sortTags(state);
    state.activeDialog = null;
    state.activeIndex = -1;
  }
}
