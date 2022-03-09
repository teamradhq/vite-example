import { setMetaDescription } from '@src/utils/setMetaDescription';

const clearHead = () => {
  while (document.head.lastChild) {
    document.head.removeChild(document.head.lastChild);
  }
};

const initMeta = () => {
  const meta = document.createElement('meta');
  meta.name='description';
  meta.content='test';
  document.head.appendChild(meta);
};

describe('utils.setMetaDescription', () => {
  beforeAll(() => {
    process.env.APP_TITLE = 'Test Title';
  });

  it('should update existing meta', () => {
    expect.assertions(1);
    initMeta();

    setMetaDescription('something');
    const meta = document.head.querySelector('meta[name=description]');

    expect(meta?.getAttribute('content'))
      .toBe('something');
  });

  it('should create new meta', () => {
    expect.assertions(1);
    clearHead();

    setMetaDescription('something');
    const meta = document.head.querySelector('meta[name=description]');

    expect(meta?.getAttribute('content'))
      .toBe('something');
  });
});
