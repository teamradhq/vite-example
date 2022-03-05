import { Draft } from '@reduxjs/toolkit';

/**
 * Reindex tags based on their current order.
 *
 * This should be run after any operation which may change
 * the tag order:
 *
 *    * Sort Tags
 *    * Remove Tag
 *
 * This should not be run after operations which don't adjust
 * the order:
 *
 *    * Add Tag
 *    * Edit Tag
 *
 * @param state
 */
export const reindexTags = (state: Draft<State.Tags.Store>): State.Tags.Store['data'] => {
  return state.data.map(({ name, key }, index) => ({
    name,
    index,
    key,
  }));
};
