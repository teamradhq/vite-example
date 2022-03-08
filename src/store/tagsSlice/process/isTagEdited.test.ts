import { isTagEdited } from '@src/store/tagsSlice/process/isTagEdited';


describe('store.tags.process.isTagEdited', () => {
  const Tag = (): State.Tags.Tag => ({
    name: 'name',
    group: 'bar',
    key: 'key',
    index: 1,
  });

  type TestCase = [
    boolean,
    string,
    State.Tags.Tag,
    State.Tags.Tag,
  ];

  const cases: TestCase[] = [
    [false, 'tag unchanged', Tag(), Tag()],
    [true, 'name changed', Tag(), { ...Tag(), name: 'change' }],
    [true, 'group changed', Tag(), { ...Tag(), group: 'change' }],
  ];

  it.each(cases)('should be %s if %s', (expected, _, previous, current) => {
    expect.assertions(1);

    expect(isTagEdited(previous, current)).toBe(expected);
  });
});
