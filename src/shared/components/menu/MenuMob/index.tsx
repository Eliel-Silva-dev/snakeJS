'use client';

import { useEffect } from 'react';
import style from './style.min.module.css';

import Link from 'next/link';
import PlusRec from '@/shared/components/PlusRec';

const MenuDesk = () => {
  const hamburguerActive = () => {
    const contHamb = document.getElementById(
      'container_hamburguer'
    ) as HTMLElement;
    contHamb.classList.toggle('style_min_active__D38du');
  };

  useEffect(() => {
    const menuMobile = document.getElementById(
      'container_hamburguer'
    ) as HTMLElement;
    const masc = document.getElementById('masc') as HTMLElement;
    const liList = document.querySelectorAll(
      '#links li'
    ) as NodeListOf<Element>;

    menuMobile.addEventListener('click', hamburguerActive);
    masc.addEventListener('click', hamburguerActive);
    liList.forEach((li) => {
      li.addEventListener('click', hamburguerActive);
    });
  }, []);

  return (
    <div className={style.menu_mob}>
      <div id="container_hamburguer" className={style.container_hamburguer}>
        <div className={style.hamburguer}></div>
      </div>
      <div id="masc" className={style.masc}></div>
      <ul id="links" className={style.link_container}>
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
        <li id={style.plus}>
          <PlusRec />
        </li>
      </ul>
    </div>
  );
};

export default MenuDesk;
