import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { tagExists } from '@src/store/tagsSlice/process/tagExists';
import { newTag } from '@src/store/tagsSlice/process/newTag';
import { sortTags } from '@src/store/tagsSlice/process/sortTags';

/**
 * Validate, then add valid tag to the store.
 *
 * @param state
 * @param action
 */
export function addNewTag(state: Draft<State.Tags.Store>, action: PayloadAction<State.Tags.New>) {
  const tag = action.payload;

  if (!tag.name || tagExists(state, tag)) {
    return;
  }

  state.data.push(newTag(tag.name));
  state.data = sortTags(state);
}
