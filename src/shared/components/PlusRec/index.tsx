import Link from 'next/link';
import style from './style.min.module.css';
import Button from '../buttons/Button';
import { FaWhatsapp } from 'react-icons/fa';
import { about } from '@/database';

const PlusRec = () => {
  return (
    <div className={style.plus_rec}>
      <Button>
        <Link href={`tel:${about.contact}`} target="_blank">
          <FaWhatsapp /> Pedido
        </Link>
      </Button>
    </div>
  );
};
export default PlusRec;
