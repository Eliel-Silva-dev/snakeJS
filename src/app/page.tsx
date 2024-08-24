'use client';

import style from './page.module.css';
import { FaPlayCircle } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { randomPosition, randomColor, size } from '@/shared/func';

const Home = () => {
  /*inicio seleção de elementos */
  const buttonPlay = useRef({} as HTMLButtonElement);
  const finalScore = useRef({} as HTMLSpanElement);
  const score = useRef({} as HTMLSpanElement);
  const menu = useRef({} as HTMLDivElement);
  const canvas = useRef({} as HTMLCanvasElement);
  const ctx = canvas.current.getContext('2d') as CanvasRenderingContext2D;
  /*fim seleção de elementos */

  const [direction, setDirection] = useState<string>('');

  const audio: HTMLAudioElement = new Audio('../assets/audio.mp3');

  /*inicio types*/
  type TInitialPosition = {
    x: number;
    y: number;
  };

  type TFood = {
    x: number;
    y: number;
    color: string;
  };

  type TMoveKey = {
    key: string;
  };

  /*fim types */

  const initialPosition: TInitialPosition = { x: 270, y: 240 }; // posição inicial da snake

  const loopId = useRef<NodeJS.Timeout>();

  let snake = [initialPosition];

  const incrementScore = () => {
    score.current.textContent = `${+(score.current.textContent as string) + 10}`;
  };

  /*inicio food*/
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

    for (let i = 30; i < canvas.current.width; i += 30) {
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

  /* inicio movekey */
  const moveKey = ({ key }: TMoveKey) => {
    if (key == 'ArrowUp' && direction != 'down') {
      setDirection('up');
    }
    if (key == 'ArrowDown' && direction != 'up') {
      setDirection('down');
    }
    if (key == 'ArrowRight' && direction != 'left') {
      setDirection('right');
    }
    if (key == 'ArrowLeft' && direction != 'right') {
      setDirection('left');
    }
  };
  /* inicio movekey */

  /*inicio chackeat */
  const chackEat = () => {
    const head = snake[snake.length - 1];

    if (head.x == food.x && head.y == food.y) {
      incrementScore();
      snake.push(head);
      audio.play();

      let x = randomPosition();
      let y = randomPosition();

      while (snake.find((position) => position.x == x && position.y == y)) {
        x = randomPosition();
        y = randomPosition();
      }

      food.x = x;
      food.y = y;
      food.color = randomColor();
    }
  };
  /*fim chackeat */

  /*inicio gameover */
  const gameOver = () => {
    setDirection(''); // parar a movimentação
    menu.current.style.display = 'flex'; // mostra o menu
    finalScore.current.textContent = score.current.textContent; // add o score atual ao score final
    canvas.current.style.filter = 'blur(2px)'; // desfoca a o fundo do game

    document.removeEventListener('keydown', moveKey);
  };
  /*fim gameover */

  /*inicio collision */
  const checkCollision = () => {
    const head = snake[snake.length - 1]; // posição da cabeça
    const canvasLimit = canvas.current.width - size; // limite que a snake pode ir
    const neckIndex = snake.length - 2; // posição do pescoço

    const wallCollision = // bateu na perede?
      head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit;

    const selfCollision = snake.find((position, idx) => {
      // bateu em si mesma? se sim retorna um objeto que sera convertido em boolean no if
      return idx < neckIndex && position.x == head.x && position.y == head.y;
    });

    if (wallCollision || selfCollision) {
      gameOver();
    }
  };
  /*fim collision*/

  const gameloop = () => {
    clearTimeout(loopId.current);

    ctx.clearRect(0, 0, 600, 600); // apaga o game
    drawGrid(); // deseja as linhas do grid
    drawFood(); // desenha a food em random position
    moveSnake(); // controla os movimentos da snake
    drawSnake(); // desenha a snake no centro (fixed position)
    chackEat(); // verifica se pegou a food
    checkCollision(); // verifica se ouve colisão

    loopId.current = setTimeout(() => {
      gameloop(); // chama o game novamente
    }, 300);
  };

  useEffect(() => {
    document.addEventListener('keydown', moveKey);

    buttonPlay.current.addEventListener('click', () => {
      score.current.textContent = '00'; // zena o score
      menu.current.style.display = 'none'; // remove o menu
      canvas.current.style.filter = 'none'; // remove o desfoque

      document.addEventListener('keydown', moveKey);

      snake = [initialPosition]; // retorna a snake para posição inicial
    });

    gameloop();
  }, []);

  return (
    <main id={style.main_home}>
      <div className={style.score}>
        score:{' '}
        <span ref={score} className={style.score_value}>
          00
        </span>
      </div>

      <div ref={menu} className={style.menu_screen}>
        <span className={style.game_over}>game over</span>
        <span className={style.final_socre}>
          score: <span ref={finalScore}>00</span>
        </span>

        <button ref={buttonPlay} className={style.btn_play}>
          <FaPlayCircle />
          Jogar novamente
        </button>
      </div>
      <canvas ref={canvas} width="600" height="600"></canvas>
    </main>
  );
};

export default Home;
