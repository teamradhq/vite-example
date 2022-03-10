import { selectTags } from '@src/store/tags/selectors/selectTags';

import { RootState } from '@src/store';

// eslint-disable-next-line jest/no-mocks-import
import { newStore } from '@src/__mocks__/tagStore.mock';

describe('store.tags.selectors.selectTags', () => {
  let store: RootState;

  beforeEach(() => {
    store = {
      tags: newStore(),
    } as RootState;
  });

  it('should "%s" active dialog', () => {
    expect.assertions(1);

    expect(selectTags(store)).toStrictEqual(newStore().data);
  });
});
