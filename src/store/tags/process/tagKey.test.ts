import { tagKey } from '@src/store/tags/process/tagKey';

import { uuid } from '@src/services/uuid';
jest.mock('@src/services/uuid');
const mockUuid = jest.mocked(uuid);

describe('store.tag.process.tagKey', () => {
  beforeAll(() => {
    mockUuid.mockReturnValue('key');
  });

  it.each([[], []])('should generate a random key', () => {
    expect.assertions(3);

    const result = tagKey();

    expect(uuid).toHaveBeenCalledTimes(1);
    expect(uuid).toHaveBeenCalledWith({ prefix: 'tag' });
    expect(result).toBe('key');
  });
});
