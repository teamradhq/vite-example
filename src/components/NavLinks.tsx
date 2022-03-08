import { NavLink } from 'react-router-dom';

export function NavLinks(props: Props.NavLinks) {
  return (
    <nav className="nav-links">
      <ul className="nav-links-list">
        {props.pages.map(({ path, title, key }) => (
          <li key={`link-${key}`}>
            <NavLink
              to={path}
            >{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
