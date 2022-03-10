import { displayFilter } from '@src/utils/displayFilter';



describe('utils.displayFilter', () => {
  type SomeType = {
    [k: string]: number,
  }

  const SomeValue = (): SomeType => ({ a: 1, b: 2, c: 3 });

  type TestCase = [
    _: string,
    options: Props.Ui.DisplayFields<SomeType> | undefined,
    expected: Partial<SomeType>,
  ];

  const cases: TestCase[] = [
    ['unaltered value', undefined, SomeValue()],
    ['remove hidden fields', { hide: ['b', 'c'] }, { a: 1 }],
    ['preserve shown fields', { show: ['a', 'b'] }, { a: 1, b: 2 }],
  ];

  it.each(cases)('should %s', (_, options, expected) => {
    expect.assertions(1);

    const result = displayFilter(SomeValue(), options);

    expect(result).toStrictEqual(expected);
  });

  it('should throw RangeError if show and hide arrays are present', () => {
    expect.assertions(2);

    const shouldThrow = () => {
      displayFilter(SomeValue(), {
        show: ['a'],
        hide: ['a', 'b'],
      });
    };

    expect(shouldThrow).toThrow(RangeError);
    expect(shouldThrow).toThrow('Only pass show or hide fields');
  });
});
