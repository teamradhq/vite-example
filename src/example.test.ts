import { example } from '@src/example';

describe('example', () => {
  it('should pass the test', () => {
    expect.assertions(1);

    expect(example(3, 4)).toBe(7);
  });
});
