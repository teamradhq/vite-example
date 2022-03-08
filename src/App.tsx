import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { uuid } from '@src/services/uuid';

import { store } from '@src/store';

import { NavLinks } from '@src/components/NavLinks';
import { Counter } from '@src/pages/Counter';
import { Tags } from '@src/pages/Tags';

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
    path: '/data',
    title: 'Tags',
    key: pageKey(),
    Component: Tags,
  },
];

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
      element={Component ? <Component /> : <>{title} View (No Component)</>}
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
