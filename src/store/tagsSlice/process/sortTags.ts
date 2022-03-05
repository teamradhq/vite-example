import { Draft } from '@reduxjs/toolkit';
import { reindexTags } from '@src/store/tagsSlice/process/reindexTags';

/**
 * Sort tags alphabetically from A - Z.
 *
 * @param state
 */
export const sortTags = (state: Draft<State.Tags.Store>): State.Tags.Store['data'] => {
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
