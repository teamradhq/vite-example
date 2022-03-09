import { setMetaDescription } from '@src/utils/setMetaDescription';

type TestCase = [
  string,
    string | undefined,
  string,
  TestSetupOptions?,
];

type TestSetupOptions = {
  init?: boolean,
  clear?: boolean,
};

const setup = (content?: string, { clear, init }: TestSetupOptions = {}) => {
  while (clear && document.head.lastChild) {
    document.head.removeChild(document.head.lastChild);
  }

  if (init) {
    const meta = document.createElement('meta');
    meta.name='description';
    meta.content='test';
    document.head.appendChild(meta);
  }

  setMetaDescription(content);

  return document.head.querySelector('meta[name=description]');
};

describe('utils.setMetaDescription', () => {
  const OLD_ENV = { ...process.env };

  beforeEach(() => {
    jest.resetModules();

    process.env = {
      ...OLD_ENV,
      APP_DESCRIPTION: 'Test Environment',
    };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  const cases: TestCase[] = [
    ['update meta description', 'something', 'something', { init: true }],
    ['create meta description', 'something', 'something', { clear: true }],
    ['set default meta description', undefined, 'Test Environment', {}],
  ];

  it.each(cases)('should %s', (_, content, expected, options) => {
    expect.assertions(1);

    const meta = setup(content, options);

    expect(meta?.getAttribute('content'))
      .toBe(expected);
  });
});
