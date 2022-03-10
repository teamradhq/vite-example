import { Draft, PayloadAction } from '@reduxjs/toolkit';

/**
 * Update the index of the active tag:
 *
 *    * `index > -1` indicates active Tag.
 *    * `index == -1` indicates no active Tag.
 *
 * @param state
 * @param action
 */
export const setActiveIndex = (state: Draft<State.Tags.Store>, action: PayloadAction<number>) => {
  const index = action.payload;
  if (index < 0 || index >= state.data.length) {
    state.activeIndex = -1;
  }

  state.activeIndex = index;
};
