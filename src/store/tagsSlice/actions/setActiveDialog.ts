import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { isIndexValid } from '@src/utils';

/**
 * Update the active dialog or clear it.
 *
 * @param state
 * @param action
 */
export function setActiveDialog(state: Draft<State.Tags.Store>, action: PayloadAction<State.Tags.Payload.Dialog>) {
  const { dialog, index } = action.payload;

  state.activeIndex = isIndexValid(state.data, index) ? index : -1;
  state.activeDialog = dialog;
}
