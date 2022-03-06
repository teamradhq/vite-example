import { Draft } from '@reduxjs/toolkit';
import { reindexTags } from '@src/store/tagsSlice/process/reindexTags';
import { sortAlpha } from '@src/utils/sortAlpha';

/**
 * Sort tags alphabetically from A - Z.
 *
 * @param state
 */
export const sortTags = (state: Draft<State.Tags.Store>): State.Tags.Store['data'] => {
  const sorted = state.data.sort((a, b) => (
    sortAlpha(a.name, b.name)
  ));

  return reindexTags({
    ...state,
    data: sorted,
  });
};
