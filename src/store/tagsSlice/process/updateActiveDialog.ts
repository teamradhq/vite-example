import { Draft, PayloadAction } from '@reduxjs/toolkit';

/**
 * Update the active dialog or remove it.
 *
 * @param state
 * @param action
 */
export function updateActiveDialog(state: Draft<State.Tags.Store>, action: PayloadAction<State.Tags.Payload.Dialog>) {
  const { dialog, index } = action.payload;

  state.activeDialog = dialog;
  state.activeIndex = Number(index) > -1 ? 0 : -1;
}
