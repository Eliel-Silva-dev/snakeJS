import Link from 'next/link';
import style from './style.min.module.css';
import { FaCookieBite } from 'react-icons/fa';

const Logo = () => {
  return (
    <div id={style.logo_title}>
      <FaCookieBite />
      <h2>
        <Link href={'/'}>Padaria Vó Rosa</Link>
      </h2>
    </div>
  );
};

export default Logo;
