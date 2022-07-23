import s from './Header.module.scss';
import NavMenu from './NavMenu/NavMenu';

const Header = () => {
  return (
    <header className={s.header}>
      <NavMenu />
    </header>
  );
};

export default Header;
