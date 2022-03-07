import { selectActiveTag } from '@src/store/tagsSlice/selectors/selectActiveTag';

import { RootState } from '@src/store';

// eslint-disable-next-line jest/no-mocks-import
import { newStore } from '@src/__mocks__/tagStore.mock';

describe('store.tags.selectors.selectActiveTag', () => {
  let store: RootState;

  beforeEach(() => {
    store = {
      tags: newStore(),
    } as RootState;
  });

  const cases: [
    string,
    number,
    NullableType<State.Tags.Tag>
  ][] = [
    ['tag', 0, newStore().data[0]],
    ['tag', 1, newStore().data[1]],
    ['null', -1, null],
    ['null', 5, null],
  ];

  it.each(cases)('should yield %s for index %s', (_, index, expected) => {
    expect.assertions(1);

    store.tags.activeIndex = index;

    expect(selectActiveTag(store)).toStrictEqual(expected);
  });
});
