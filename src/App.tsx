import { Routes, Route, NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './App.css';
import { Counter } from '@src/pages/Counter';


const links = [
  ['/', 'Home', uuid()],
  ['/about', 'About', uuid()],
  ['/counter', 'Counter', uuid()],
];

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <h1>{process.env.APP_TITLE}</h1>
      </header>
      <nav>
        <ul>
          {links.map(([route, title, key]) => (
            <li key={key}>
              <NavLink
                to={route}
              >{title}</NavLink>
            </li>
           ))}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/about" element={<>About</>} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
