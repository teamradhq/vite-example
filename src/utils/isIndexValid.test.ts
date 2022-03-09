import { isIndexValid } from '@src/utils';

describe('utils.isIndexValid', () => {
  let array: number[];

  beforeEach(() => {
    array = [1, 2, 3, 4];
  });

  const cases: [string, string, number, boolean, unknown[]?][] = [
    ['invalid', 'negative index', -1, false],
    ['invalid', 'index too high', -4, false],
    ['valid', 'index is 0', 0, true],
    ['valid', 'index in range', 2, true],
  ];

  it.each(cases)('should be %s if %s', (_, __, index, expected) => {
    expect.assertions(1);

    expect(isIndexValid(array, index)).toBe(expected);
  });

  it('should not be valid if array is empty', () => {
    expect.assertions(1);

    expect(isIndexValid([], 0)).toBe(false);
  });
});
