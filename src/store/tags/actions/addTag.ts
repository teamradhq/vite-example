import { Draft, PayloadAction } from '@reduxjs/toolkit';
import {
  tagExists,
  newTag,
  sortTags,
} from '@src/store/tags/process';

/**
 * Validate, then add valid tag to the store.
 *
 * A tag is valid if:
 *
 *    * There isn't an existing tag with the same name.
 *    * Its index is -1 or undefined.
 *    * Its key is falsy (this seems redundant).
 *
 * @param state
 * @param action
 */
export function addTag(state: Draft<State.Tags.Store>, action: PayloadAction<State.Tags.New>) {
  const tag = action.payload;

  if (!tag.name || tagExists(state, tag)) {
    return state;
  }

  state.data.push(newTag(tag.name));
  state.data = sortTags(state);

  return state;
}
