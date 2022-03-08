import { FC } from 'react';

import { setDocumentTitle } from '@src/utils/setDocumentTitle';

import './Page.css';

export const Page: FC<Props.Page> = function Page(props) {
  const {
    children,
    slug,
    title,
  } = props;

  setDocumentTitle(title);

  return <section role="contentinfo" aria-label={title} className={`page page-${slug}`}>
    {children}
  </section>;
};
