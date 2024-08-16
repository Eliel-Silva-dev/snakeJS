import { drawGrid } from './grid/grid.js';
import {
  buttonPlay,
  canvas,
  ctx,
  finalScore,
  menu,
  score,
} from './selectElements/selectElement.js';
import { drawFood } from './food/food.js';
import { drawSnake, initialPosition, moveSnake } from './snake/snake.js';
import { chackEat, checkCollision } from './methods/methods.js';

let loopId;

export let direction = '';

export let snake = [initialPosition];

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

export const gameOver = () => {
  direction = undefined; // parar a movimentação
  menu.style.display = 'flex'; // mostra o menu
  finalScore.textContent = score.textContent; // add o score atual ao score final
  canvas.style.filter = 'blur(2px)'; // desfoca a o fundo do game

  
  snake = [initialPosition];
};

document.addEventListener('keydown', ({ key }) => {
  if (key == 'ArrowUp' && direction != 'down') {
    direction = 'up';
  }
  if (key == 'ArrowDown' && direction != 'up') {
    direction = 'down';
  }
  if (key == 'ArrowRight' && direction != 'left') {
    direction = 'right';
  }
  if (key == 'ArrowLeft' && direction != 'right') {
    direction = 'left';
  }
});

buttonPlay.addEventListener('click', () => {
  score.textContent = '00'; // zena o score
  menu.style.display = 'none'; // remove o menu
  canvas.style.filter = 'none'; // remove o desfoque

  snake = [initialPosition]; // retorna a snake para posição inicial
});

gameloop();
