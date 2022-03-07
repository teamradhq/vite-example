import { RootState } from '@src/store';

export const selectTags = (state: RootState) => state.tags.data;
