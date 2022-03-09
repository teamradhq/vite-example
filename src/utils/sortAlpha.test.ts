import { sortAlpha } from '@src/utils';

describe('utils.sortAlpha', () => {
  const cases: [number, string, string][] = [
    [-1, 'a', 'b'],
    [0, 'a', 'a'],
    [1, 'b', 'a'],
  ];

  it.each(cases)('should yield %i for "%s" and "%s"', (expected, a, b) => {
    expect.assertions(1);

    expect(sortAlpha(a, b)).toBe(expected);
  });

  it('should sort items in the array', () => {
    expect.assertions(1);

    const input = ['b', 'd', 'c', 'a'];
    const output = input.sort(sortAlpha);

    expect(output).toStrictEqual(['a', 'b', 'c', 'd']);
  });
});
