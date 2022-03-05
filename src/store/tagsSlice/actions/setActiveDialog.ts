import { Draft, PayloadAction } from '@reduxjs/toolkit';

/**
 * Update the active dialog or remove it.
 *
 * @param state
 * @param action
 */
export function setActiveDialog(state: Draft<State.Tags.Store>, action: PayloadAction<State.Tags.Payload.Dialog>) {
  const { dialog, index } = action.payload;

  state.activeDialog = dialog;

  if (index) {
    state.activeIndex = index;
    return;
  }

  state.activeIndex = -1;
}
