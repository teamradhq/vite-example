import { v4 } from 'uuid';
jest.mock('uuid');
const mockV4 = jest.mocked(v4);

import { uuid } from '@src/services/uuid';
import { DefineKeyOptions } from '@src/services/uuid';

describe('services.uuid', () => {
  beforeAll(() => {
    mockV4.mockReturnValue('called');
  });

  it('should generate a random string with uuid.v4', () => {
    expect.assertions(1);

    uuid();

    expect(mockV4).toHaveBeenCalledTimes(1);
  });

  const cases: [
    string,
    DefineKeyOptions | undefined,
    string
  ][] = [
    ['generate', undefined, 'called'],
    ['prefix', { prefix: 'prefix' }, 'prefix-called'],
    ['suffix', { suffix: 'suffix' }, 'called-suffix'],
    ['prefix & suffix', { prefix: 'prefix',  suffix: 'suffix' }, 'prefix-called-suffix'],
  ];

  it.each(cases)('should %s random string', (_, input, expected) => {
    expect.assertions(1);

    const result = uuid(input);

    expect(result).toBe(expected);
  });
});
