import { tagKey } from '@src/store/tagsSlice/process/tagKey';

/**
 * New tag should have a name and random key only.
 *
 * @param name
 */
export const newTag = (name: string): State.Tags.Tag => ({
  name,
  index: -1,
  key: tagKey(),
});
