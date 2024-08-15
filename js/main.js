import { drawGrid } from './grid/grid.js';
import { ctx } from './selectElements/selectElement.js';
import { drawFood } from './food/food.js';

let loopId;

const gameloop = () => {
  clearTimeout(loopId);

  ctx.clearRect(0, 0, 600, 600);
  drawGrid();
  drawFood();

  loopId = setTimeout(() => {
    gameloop();
  }, 300);
};

document.addEventListener('keydown', ({ key }) => {
  console.log('tecla digitada: ', key);
});

gameloop();
