import Image from 'next/image';
import style from './page.module.css';
import { FaPlayCircle } from 'react-icons/fa';

export default function Home() {
  /*
  <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
  */
  return (
    <main id={style.main_home}>
      <div className={style.score}>
        score: <span className={style.score_value}>00</span>
      </div>

      <div className={style.menu_screen}>
        <span className={style.game_over}>game over</span>
        <span className={style.final_socre}>
          score: <span id="fn_score">00</span>
        </span>

        <button className={style.btn_play}>
          <FaPlayCircle />
          Jogar novamente
        </button>
      </div>
      <canvas width="600" height="600"></canvas>
    </main>
  );
}
