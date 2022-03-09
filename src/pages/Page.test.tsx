import type { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';

import { setDocumentTitle, setMetaDescription } from '@src/utils';

jest.mock('@src/utils/setDocumentTitle');
jest.mock('@src/utils/setMetaDescription');

import { Page } from '@src/pages/Page';

const defaultProps: PropsWithChildren<Props.Page> = {
  title: 'Page Title',
  slug: 'title',
  children: <>Page Content</>,
};

async function setup(props: Partial<Props.Page> = {}) {

  const utils = render(<Page {...{
    ...defaultProps,
    ...props,
  }} />);

  const section = await utils.findByRole('contentinfo');

  return { utils, section };
}

describe('pages.Page', () => {
  it('should render page content', async () => {
    expect.assertions(1);

    const { section } = await setup();

    expect(section).toHaveTextContent('Page Content');
  });

  it('should label page region', async () => {
    expect.assertions(1);

    const { section } = await setup();
    const label = section.getAttribute('aria-label');

    expect(label).toBe('Page Title');
  });

  it('should add page and page-{slug} class to region', async () => {
    expect.assertions(2);

    const { section } = await setup();

    expect(section).toHaveClass('page');
    expect(section).toHaveClass('page-title');
  });

  it('should set the document title', async () => {
    expect.assertions(1);

    await setup();

    expect(setDocumentTitle).toHaveBeenCalledWith('Page Title');
  });

  it('should set supplied meta description', async () => {
    expect.assertions(1);

    await setup({ description: 'Test Description' });

    expect(setMetaDescription).toHaveBeenCalledWith('Test Description');
  });

  it('should not set meta description if not provided', async () => {
    expect.assertions(1);

    await setup();

    expect(setMetaDescription).not.toHaveBeenCalled();
  });
});
