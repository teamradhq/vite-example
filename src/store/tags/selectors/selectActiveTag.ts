import { RootState } from '@src/store';
import { selectActiveIndex } from '@src/store/tags/selectors/selectActiveIndex';

export const selectActiveTag = (state: RootState) => (
  state.tags.data[selectActiveIndex(state)] || null
);
