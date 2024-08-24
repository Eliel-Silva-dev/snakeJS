'use client';

import style from './page.module.css';
import { FaPlayCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import {
  drawGrid,
  buttonPlay,
  canvas,
  ctx,
  menu,
  score,
  drawFood,
  drawSnake,
  initialPosition,
  moveSnake,
  chackEat,
  checkCollision,
  moveKey,
} from '@/shared/func';

let loopId: NodeJS.Timeout;

export let snake = [initialPosition];

export default function Home() {
  const gameloop = () => {
    clearTimeout(loopId);

    ctx.clearRect(0, 0, 600, 600); // apaga o game
    drawGrid(); // deseja as linhas do grid
    drawFood(); // desenha a food em random position
    moveSnake(); // controla os movimentos da snake
    drawSnake(); // desenha a snake no centro (fixed position)
    chackEat(); // verifica se pegou a food
    checkCollision(); // verifica se ouve colisão

    loopId = setTimeout(() => {
      gameloop(); // chama o game novamente
    }, 300);
  };

  useEffect(() => {
    document.addEventListener('keydown', moveKey);

    buttonPlay.addEventListener('click', () => {
      score.textContent = '00'; // zena o score
      menu.style.display = 'none'; // remove o menu
      canvas.style.filter = 'none'; // remove o desfoque

      document.addEventListener('keydown', moveKey);

      snake = [initialPosition]; // retorna a snake para posição inicial
    });

    gameloop();
  }, []);

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
