import { prefixSuffix } from '@src/utils/prefixSuffix';

describe('services.uuid', () => {

  const cases: [
    string,
    Partial<PrefixOptions>,
    string
  ][] = [
    ['pass through', {}, 'value'],
    ['prefix', { prefix: 'prefix' }, 'prefix-value'],
    ['suffix', { suffix: 'suffix' }, 'value-suffix'],
    ['prefix & suffix', { prefix: 'prefix',  suffix: 'suffix' }, 'prefix-value-suffix'],
  ];

  it.each(cases)('should %s string', (_, input, expected) => {
    expect.assertions(1);

    const result = prefixSuffix({
      ...input,
      value: 'value',
    });

    expect(result).toBe(expected);
  });

  it('should use the provided separator', () => {
    expect.assertions(1);

    const result = prefixSuffix({
      prefix: 'prefix',
      value: 'value',
      suffix: 'suffix',
    }, '+');

    expect(result).toBe('prefix+value+suffix');
  });
});
