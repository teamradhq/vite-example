import { RootState } from '@src/store';
import { selectActiveIndex } from '@src/store/tagsSlice/selectors/selectActiveIndex';

export const selectActiveTag = (state: RootState) => (
  state.tags.data[selectActiveIndex(state)] || null
);
