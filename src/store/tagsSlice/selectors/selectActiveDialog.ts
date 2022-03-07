import { RootState } from '@src/store';

export const selectActiveDialog = (state: RootState) => state.tags.activeDialog;
