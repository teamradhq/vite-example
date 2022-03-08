import { FC } from 'react';

import './Page.css';

export const Page: FC<Props.Page> = function Page(props) {
  const { children, slug } = props;

  return <section className={`page page-${slug}`}>
    {children}
  </section>;
};
