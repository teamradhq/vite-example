import { sortTags } from '@src/store/tagsSlice/process/sortTags';

import { sortAlpha } from '@src/utils/sortAlpha';
import { reindexTags } from '@src/store/tagsSlice/process/reindexTags';

jest.mock('@src/utils/sortAlpha');
jest.mock('@src/store/tagsSlice/process/reindexTags');

const mocks = {
  sort: jest.mocked(sortAlpha),
  reindex: jest.mocked(reindexTags),
} ;

describe('store.tags.process.sortTags', () => {
  let store: State.Tags.Store;

  beforeEach(() => {
    store = {
      data: [
        { name: '1', index: 1 } as State.Tags.Tag,
        { name: '3', index: 3 } as State.Tags.Tag,
        { name: '0', index: 0 } as State.Tags.Tag,
        { name: '2', index: 2 } as State.Tags.Tag,
      ],
    } as State.Tags.Store;
  });

  it('should alpha sort tags', () => {
    expect.assertions(1);

    sortTags(store);

    expect(mocks.sort).toHaveBeenCalledTimes(3);
  });

  it('should reindex tags', () => {
    expect.assertions(1);

    sortTags(store);

    expect(mocks.reindex).toHaveBeenCalledTimes(1);
  });
});
