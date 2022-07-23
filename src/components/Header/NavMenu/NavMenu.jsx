import s from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';
import navigationItems from './navigationItems';

const NavMenu = () => {
  return (
    <nav className={s.navMenu}>
      <ul className={s.navMenu__list}>
        {navigationItems.map(({ name, url }) => (
          <li key={name} className={s.navMenu__item}>
            <NavLink
              exact
              to={url}
              className={s.navMenu__link}
              activeClassName={s.active}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
