import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { uuid } from '@src/services/uuid';
import { store } from '@src/store';

import { NavLinks } from '@src/components/NavLinks';
import { Counter, Tabs, Tags, Page } from '@src/pages';

import './App.css';
import { FC } from 'react';

const pageKey = () => uuid({ prefix: 'page' });

const pages: PageEntry[] = [
  {
    path: '/',
    title: 'Home',
    key: pageKey(),
  },
  {
    path: '/about',
    title: 'About',
    key: pageKey(),
  },
  {
    path: '/counter',
    title: 'Counter',
    key: pageKey(),
    Component: Counter,
  },
  {
    path: '/tags',
    title: 'Tags',
    key: pageKey(),
    Component: Tags,
  },
  {
    path: '/tabs',
    title: 'Tabs',
    key: pageKey(),
    Component: Tabs,
  },
];

/**
 * Render Component if page entry has one, or create a placeholder page.
 *
 * @param title
 * @param path
 * @param Component
 * @constructor
 */
const ComponentOrPage: FC<PageEntry> = function ComponentOrPage({
  title,
  path,
  Component,
}) {
  if (Component) {
    return <Component />;
  }
  return (
    <Page title={title} slug={path.slice(1)}>
      {title} (No Component)
    </Page>
  );
};

function App() {
  const routes = pages.map(({
    path,
    title,
    key,
    Component,
  }) => (
    <Route
      key={`route-${key}`}
      path={path}
      element={ComponentOrPage({ path, title, key, Component })}
    />
  ));

  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>{process.env.APP_TITLE}</h1>
        </header>
        <NavLinks pages={pages} />
        <Routes>
          {routes}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
