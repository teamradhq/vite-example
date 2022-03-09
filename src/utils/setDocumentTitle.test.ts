import { setDocumentTitle } from '@src/utils/setDocumentTitle';
import { prefixSuffix } from '@src/utils/prefixSuffix';

jest.mock('@src/utils/prefixSuffix');
const mockPrefixSuffix = jest.mocked(prefixSuffix);

describe('utils.setDocumentTitle', () => {
  beforeAll(() => {
    process.env.APP_TITLE = 'Test Title';

    mockPrefixSuffix.mockClear();
    mockPrefixSuffix.mockImplementation(({ prefix, value }, separator) => (
      Object.values([prefix, value, separator]).join('::')
    ));
  });

  it('should set the document title to app title', () => {
    expect.assertions(2);

    setDocumentTitle();

    expect(document.title).toBe('Test Title');
    expect(mockPrefixSuffix).not.toHaveBeenCalled();
  });


  it('should include prefix in document title', () => {
    expect.assertions(1);

    setDocumentTitle('Foo');

    expect(document.title).toBe('Foo::Test Title:: |');
  });

  it('should prefix title with separator', () => {
    expect.assertions(1);

    setDocumentTitle('foo');

    expect(mockPrefixSuffix).toHaveBeenCalledWith({
      prefix: 'foo',
      value: expect.any(String),
    }, ' | ');
  });
});
