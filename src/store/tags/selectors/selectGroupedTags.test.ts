import { selectGroupedTags } from '@src/store/tags/selectors/selectGroupedTags';

import { RootState } from '@src/store';
// eslint-disable-next-line jest/no-mocks-import
import { newStore } from '@src/__mocks__/tagStore.mock';

describe('store.tags.selectors.selectGroupedTags', () => {
  let store: RootState;

  beforeEach(() => {
    store = {
      tags: newStore(),
    } as RootState;
  });

  it('should sort tag groups alphabetically', () => {
    expect.assertions(1);

    const result = selectGroupedTags(store);

    expect(result.map(([key]) => key))
      .toStrictEqual(['Ungrouped', 'A', 'B']);
  });

  it('should separate tags by group', () => {
    expect.assertions(3);

    const result = selectGroupedTags(store);

    expect(result[0][1]).toHaveLength(2);
    expect(result[1][1]).toHaveLength(1);
    expect(result[1][1]).toHaveLength(1);
  });
});
