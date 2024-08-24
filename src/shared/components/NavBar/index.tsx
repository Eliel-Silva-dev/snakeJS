import Logo from '../Logo';
import PlusRec from '../PlusRec';
import MenuDesk from '../menu/MenuDesk';
import MenuMob from '../menu/MenuMob';

import style from './style.min.module.css';

const NavBar = () => {
  return (
    <nav id={style.navbar}>
      <Logo />
      <MenuDesk />
      <MenuMob />
      <PlusRec />
    </nav>
  );
};

export default NavBar;
