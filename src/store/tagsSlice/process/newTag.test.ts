import { newTag } from '@src/store/tagsSlice/process/newTag';

import { tagKey } from '@src/store/tagsSlice/process/tagKey';
jest.mock('@src/store/tagsSlice/process/tagKey');
const mockTagKey = jest.mocked(tagKey);

describe('store.tags.process.newTag', () => {
  const key = 'uuid';
  const index = -1;

  beforeAll(() => {
    mockTagKey.mockReturnValue(key);
  });

  type TestCase = [string, string, string | undefined, object];

  const cases: TestCase[] = [
    [
      'name',
      'a',
      undefined,
      { name: 'a', group: '', key, index },
    ],
    ['name and group', 'a', 'b', { name: 'a', group: 'b', key, index }],
  ];
  it.each(cases)('should make new tag with %s', (_, name, group, expected) => {
    expect.assertions(1);

    expect(newTag(name, group)).toStrictEqual(expected);
  });
});
