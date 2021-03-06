import { reindexTags } from '@src/store/tags/process/reindexTags';

describe('store.tags.process.reindexTags', () => {
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

  it('should update tag indexes according to their order', () => {
    expect.assertions(1);

    expect(reindexTags(store)).toStrictEqual([
        {  name: '1', index: 0 },
        {  name: '3', index: 1 },
        {  name: '0', index: 2 },
        {  name: '2', index: 3 },
    ]);
  });
});
