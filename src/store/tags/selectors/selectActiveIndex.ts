import { RootState } from '@src/store';

export const selectActiveIndex = (state: RootState) => {
  const index = state.tags.activeIndex;

  if (state.tags.data[index]) {
    return index;
  }

  return -1;
};
