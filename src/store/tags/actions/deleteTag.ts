import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { reindexTags } from '@src/store/tags/process';

/**
 * Delete supplied tag from the store
 *
 * @param state
 * @param action
 */
export function deleteTag(state: Draft<State.Tags.Store>, action: PayloadAction<State.Tags.Tag>) {
  const { index } = action.payload;
  const start = state.data.slice(0, index);
  const end = state.data.slice(index + 1);

  state.data = [
    ...start,
    ...end,
  ];
  state.activeDialog = null;
  state.activeIndex = -1;
  state.data = reindexTags(state);
}
