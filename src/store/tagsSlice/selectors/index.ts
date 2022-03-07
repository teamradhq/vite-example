import { RootState } from '@src/store';

export * from '@src/store/tagsSlice/selectors/selectGroupedTags';

export const selectActiveIndex = (state: RootState) => state.tags.activeIndex;

export const selectActiveTag = (state: RootState) => (
  state.tags.data[selectActiveIndex(state)] || null
);

export const selectActiveDialog = (state: RootState) => state.tags.activeDialog;

export const selectTags = (state: RootState) => state.tags.data;
