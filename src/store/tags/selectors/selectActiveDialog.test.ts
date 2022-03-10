import { selectActiveDialog } from '@src/store/tags/selectors/selectActiveDialog';

import { RootState } from '@src/store';

// eslint-disable-next-line jest/no-mocks-import
import { newStore } from '@src/__mocks__/tagStore.mock';

describe('store.tags.selectors.selectActiveDialog', () => {
  let store: RootState;

  beforeEach(() => {
    store = {
      tags: newStore(),
    } as RootState;
  });

  const cases: [State.Tags.Dialog][] = [
    [null],
    ['edit'],
    ['delete'],
  ];
  it.each(cases)('should "%s" active dialog', (expected) => {
    expect.assertions(1);

    store.tags.activeDialog = expected;

    expect(selectActiveDialog(store)).toBe(expected);
  });
});
