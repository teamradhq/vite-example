import { setDocumentTitle } from '@src/utils/setDocumentTitle';
import { prefixSuffix } from '@src/utils/prefixSuffix';

jest.mock('@src/utils/prefixSuffix');
const mockPrefixSuffix = jest.mocked(prefixSuffix);

describe('utils.setDocumentTitle', () => {
  beforeEach(() => {
    process.env = {
      ...OLD_ENV,
      APP_TITLE: 'Test Title',
    };

    mockPrefixSuffix.mockClear()
      .mockReturnValue('called');
  });

  afterAll(() => {
    process.env = { ...OLD_ENV };
  });

  it('should set the document title to app title', () => {
    expect.assertions(2);

    setDocumentTitle();

    expect(document.title).toBe('Test Title');
    expect(mockPrefixSuffix).not.toHaveBeenCalled();
  });

  it('should prefix title with separator', () => {
    expect.assertions(2);

    setDocumentTitle('foo');

    expect(document.title).toBe('called');
    expect(mockPrefixSuffix).toHaveBeenCalledWith({
      prefix: 'foo',
      value: 'Test Title',
    }, ' | ');
  });
});
