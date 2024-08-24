import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul className={style.menu_desk}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li>
        <Link href={'/ofertas'}>Ofertas</Link>
      </li>
      <li>
        <Link href={'/menu'}>Menu</Link>
      </li>
      <li>
        <Link href={'/sobre'}>Sobre</Link>
      </li>
    </ul>
  );
};

export default MenuDesk;
