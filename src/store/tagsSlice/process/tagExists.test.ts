import { tagExists } from '@src/store/tagsSlice/process/tagExists';

describe('store.tags.process.tagExists', () => {
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

  it('should exist if tag has a key', () => {
    expect.assertions(1);

    const result = tagExists(store, {
      key: 'defined',
    } as State.Tags.Tag);

    expect(result).toBe(true);
  });

  it('should exist if tag index is 0', () => {
    expect.assertions(1);

    const result = tagExists(store, {
      index: 0,
    } as State.Tags.Tag);

    expect(result).toBe(true);
  });

  it('should exist if tag name is in store', () => {
    expect.assertions(1);

    const result = tagExists(store, {
      name: '0',
    } as State.Tags.Tag);

    expect(result).toBe(true);
  });
});
