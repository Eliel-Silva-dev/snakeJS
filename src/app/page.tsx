'use client';

import style from './page.module.css';
import { FaPlayCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import { randomPosition, randomColor, size } from '@/shared/func';

export default function Home() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  const menu = document.querySelector('.menu_screen') as HTMLDivElement;
  const score = document.querySelector('.score_value') as HTMLSpanElement;
  const buttonPlay = document.querySelector('.btn_play') as HTMLButtonElement;
  const finalScore = document.querySelector('#fn_score') as HTMLSpanElement;

  const [direction, setDirection] = useState<string>('');

  const audio: HTMLAudioElement = new Audio('../assets/audio.mp3');

  let loopId: NodeJS.Timeout;

  let snake = [initialPosition];

  /*inicio food*/
  type TFood = {
    x: number;
    y: number;
    color: string;
  };

  const food: TFood = {
    x: randomPosition(),
    y: randomPosition(),
    color: randomColor(),
  };

  const drawFood = () => {
    const { x, y, color } = food;

    ctx.shadowColor = color;
    ctx.shadowBlur = 6;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
    ctx.shadowBlur = 0;
  };
  /*fim food*/

  /*Inicio grid*/
  const drawGrid = () => {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#191919';

    for (let i = 30; i < canvas.width; i += 30) {
      ctx.beginPath();
      ctx.lineTo(i, 0);
      ctx.lineTo(i, 600);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineTo(0, i);
      ctx.lineTo(600, i);
      ctx.stroke();
    }
  };
  /*fim grid*/

  /*inicio snake*/
  type TInitialPosition = {
    x: number;
    y: number;
  };
  const initialPosition: TInitialPosition = { x: 270, y: 240 }; // posição inicial da snake

  const drawSnake = () => {
    ctx.fillStyle = '#ddd'; // cor da snake

    snake.forEach((position, idx) => {
      if (idx == snake.length - 1) {
        // se for a ultima posição (a cabeça da snake) - aplica a cor branca;
        ctx.fillStyle = 'white';
      }

      ctx.fillRect(position.x, position.y, size, size); // desenha a snake no canvas
    });
  };

  const moveSnake = () => {
    if (!direction) return;

    const head = snake[snake.length - 1];

    if (direction == 'right') {
      snake.push({ x: head.x + size, y: head.y });
    }
    if (direction == 'left') {
      snake.push({ x: head.x - size, y: head.y });
    }
    if (direction == 'down') {
      snake.push({ x: head.x, y: head.y + size });
    }
    if (direction == 'up') {
      snake.push({ x: head.x, y: head.y - size });
    }

    snake.shift();
  };
  /*fim snake*/

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
      <canvas id="canvas" width="600" height="600"></canvas>
    </main>
  );
}
