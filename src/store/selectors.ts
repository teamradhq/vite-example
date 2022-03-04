import { RootState } from '@src/store/index';


export const selectCounter = (state: RootState): RootState['counter']['value'] => (
  state.counter.value
);
