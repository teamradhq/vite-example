import { Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { uuid } from '@src/services/uuid';

import { store } from '@src/store';
import './App.css';
import { Counter } from '@src/pages/Counter';
import { Tags } from '@src/pages/Tags';

const pageKey = () => uuid({ prefix: 'page' });

const links: [string, string, string, typeof Counter?][] = [
  ['/', 'Home', pageKey()],
  ['/about', 'About', pageKey()],
  ['/counter', 'Counter', pageKey(), Counter],
  ['/data', 'Tags', pageKey(), Tags],
];

function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>{process.env.APP_TITLE}</h1>
        </header>
        <nav>
          <ul>
            {links.map(([path, title, key]) => (
              <li key={`link-${key}`}>
                <NavLink
                  to={path}
                >{title}</NavLink>
              </li>
             ))}
          </ul>
        </nav>
        <Routes>
          {links.map(([path, title, key, Component]) => (
            <Route key={`route-${key}`} path={path} element={Component ? <Component /> : <>{title}</>} />
          ))}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
