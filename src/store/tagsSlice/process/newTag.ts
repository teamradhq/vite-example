import { tagKey } from '@src/store/tagsSlice/process/tagKey';

/**
 * New tag should have a name and random key only.
 *
 * @param name
 * @param group
 */
export const newTag = (name: string, group = ''): State.Tags.Tag => ({
  name,
  index: -1,
  key: tagKey(),
  group,
});
