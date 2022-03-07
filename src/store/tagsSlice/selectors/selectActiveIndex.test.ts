import { selectActiveIndex } from '@src/store/tagsSlice/selectors/selectActiveIndex';

import { RootState } from '@src/store';

// eslint-disable-next-line jest/no-mocks-import
import { newStore } from '@src/__mocks__/tagStore.mock';

describe('store.tags.selectors.selectActiveIndex', () => {
  let store: RootState;

  beforeEach(() => {
    store = {
      tags: newStore(),
    } as RootState;
  });

  const cases: [number, number][] = [
    [-10, -1],
    [-1, -1],
    [0, 0],
    [1, 1],
    [5, -1],
  ];
  it.each(cases)('should "%s" active dialog', (index, expected) => {
    expect.assertions(1);

    store.tags.activeIndex = index;

    expect(selectActiveIndex(store)).toBe(expected);
  });
});
