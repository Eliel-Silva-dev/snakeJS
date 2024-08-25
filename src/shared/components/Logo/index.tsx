import Link from 'next/link';
import style from './style.min.module.css';

const Logo = () => {
  return (
    <div id={style.logo_title}>
      <img src="img/snakeico.svg" alt="icone snake" />
      <h2>
        <Link href={'/'}>Snake js</Link>
      </h2>
    </div>
  );
};

export default Logo;
