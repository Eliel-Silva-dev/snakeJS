import Link from 'next/link';
import style from './style.min.module.css';
import Button from '../buttons/Button';

const PlusRec = () => {
  return (
    <div className={style.plus_rec}>
      <Button>
        <Link href={'/'} target="_blank">
          + Jogos
        </Link>
      </Button>
    </div>
  );
};
export default PlusRec;
