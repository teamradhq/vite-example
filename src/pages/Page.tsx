import { FC } from 'react';

import {
  setDocumentTitle,
  setMetaDescription,
} from '@src/utils';

import './Page.css';

export const Page: FC<Props.Page> = function Page(props) {
  const {
    children,
    slug,
    title,
    description,
  } = props;

  if (description) {
    setMetaDescription(description);
  }

  setDocumentTitle(title);

  return (
    <section
      role="contentinfo"
      aria-label={title}
      className={`page page-${slug}`}
    >
      {children}
    </section>
  );
};
