import { drawGrid } from './grid/grid.js';
import { ctx } from './selectElements/selectElement.js';
import { drawFood } from './food/food.js';
import { drawSnake, moveSnake } from './snake/snake.js';
import { chackEat } from './methods/methods.js';

let loopId;

export let direction = "";

const gameloop = () => {
  clearTimeout(loopId);

  ctx.clearRect(0, 0, 600, 600);
  drawGrid();
  drawFood();
  drawSnake();
  moveSnake();
  chackEat();

  loopId = setTimeout(() => {
    gameloop();
  }, 300);
};

document.addEventListener('keydown', ({ key }) => {

  if(key == 'ArrowUp' && direction != 'down') {
    direction = 'up';
  }
  if(key == 'ArrowDown' && direction != 'up') {
    direction = 'down';
  }
  if(key == 'ArrowRight' && direction != 'left') {
    direction = 'right';
  }
  if(key == 'ArrowLeft' && direction != 'right') {
    direction = 'left';
  }
});

gameloop();
