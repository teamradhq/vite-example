import { setDocumentTitle } from '@src/utils/setDocumentTitle';
import { prefixSuffix } from '@src/utils/prefixSuffix';

jest.mock('@src/utils/prefixSuffix');
const mockPrefixSuffix = jest.mocked(prefixSuffix);

describe('utils.setDocumentTitle', () => {
  it('should prefix title with separator', () => {
    expect.assertions(1);

    setDocumentTitle('foo');

    expect(mockPrefixSuffix).toHaveBeenCalledWith({
      prefix: 'foo',
      value: expect.any(String),
    }, ' | ');
  });
});
