import { v4 } from 'uuid';
jest.mock('uuid');
const mockV4 = jest.mocked(v4);

import { uuid } from '@src/services/uuid';
import { prefixSuffix } from '@src/utils/prefixSuffix';

jest.mock('@src/utils/prefixSuffix');

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
    Partial<PrefixOptions>,
  ][] = [
    ['pass through', {}],
    ['prefix', { prefix: 'prefix' }],
    ['suffix', { suffix: 'suffix' }],
    ['prefix & suffix', { prefix: 'prefix',  suffix: 'suffix' }],
  ];

  it.each(cases)('should %s uuid string', (_, input) => {
    expect.assertions(1);

    uuid(input);

    expect(prefixSuffix).toHaveBeenCalledWith({
      value: 'called',
      ...input,
    });
  });
});
