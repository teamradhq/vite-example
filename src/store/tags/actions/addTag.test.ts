import { addTag } from '@src/store/tags/actions/addTag';
// eslint-disable-next-line jest/no-mocks-import
import { newStore } from '@src/__mocks__/tagStore.mock';

import {
  tagExists,
  newTag,
  sortTags,
} from '@src/store/tags/process';

jest.mock('@src/store/tags/process');

type Tag = State.Tags.Tag;

const mocks = {
  tagExists: jest.mocked(tagExists),
  newTag: jest.mocked(newTag),
  sortTags: jest.mocked(sortTags),
};

describe('store.tags.actions.addTag', () => {
  let store: State.Tags.Store;
  let expected: State.Tags.Store;
  let tag: State.Tags.Tag;

  beforeAll(() => {
    mocks.sortTags
      .mockImplementation((val) => val.data);
    mocks.newTag
      .mockImplementation((name) => ({
        name,
      } as Tag));
  });

  beforeEach(() => {
    store = newStore();
    tag = { name: 'Added' } as Tag;
    expected = newStore();
    expected.data.push({ ...tag });

    Object.values(mocks).forEach(mock => mock.mockClear());
  });

  it('should not add a tag with empty name', () => {
    expect.assertions(2);

    const result = addTag(store, {
      type: 'testAddTag',
      payload: { name: '' },
    });

    expect(result).toStrictEqual(store);
    expect(mocks.sortTags).not.toHaveBeenCalled();
  });

  it('should not add tag if it already exists', () => {
    expect.assertions(2);
    mocks.tagExists.mockReturnValue(true);

    addTag(store, {
      type: 'testAddTag',
      payload: tag,
    });

    expect(mocks.tagExists).toHaveBeenCalledWith(store, tag);
    expect(mocks.sortTags).not.toHaveBeenCalled();
  });

  it('should a new tag', () => {
    expect.assertions(1);
    mocks.tagExists.mockReturnValue(false);

    const result = addTag(store, {
      type: 'testAddTag',
      payload: tag,
    });

    expect(result.data).toStrictEqual(expected.data);
  });

  it('should sort after adding tag', () => {
    expect.assertions(1);
    mocks.tagExists.mockReturnValue(false);

    addTag(store, {
      type: 'testAddTag',
      payload: tag,
    });

    expect(sortTags).toHaveBeenCalledWith(expected);
  });
});
