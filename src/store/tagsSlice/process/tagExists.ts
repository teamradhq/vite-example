import { Draft } from '@reduxjs/toolkit';

const isExistingTag = (tag: State.Tags.New) => (
  ({ name }: State.Tags.Tag) => (
    name.toLowerCase() === tag.name.toLowerCase()
  )
);

/**
 * Tag exists if it has a key or index, or if there's already a tag with the
 * same name.
 *
 * @param state
 * @param tag
 */
export const tagExists = (
  state: Draft<State.Tags.Store>,
  tag: State.Tags.New,
): boolean => {

  return Boolean(
    tag.key
    || tag.index === 0
    || Number(tag.index) > 0
    || state.data.some(isExistingTag(tag)),
  );
};
