import { ctx } from '../selectElements/selectElement.js';
import { size } from '../variables/variable.js';
import { direction, snake } from '../main.js';

export const initialPosition = { x: 270, y: 240 }; // posição inicial da snake

export const drawSnake = () => {
  ctx.fillStyle = '#ddd'; // cor da snake

  snake.forEach((position, idx) => {
    if (idx == snake.length - 1) {
      // se for a ultima posição (a cabeça da snake) - aplica a cor branca;
      ctx.fillStyle = 'white';
    }

    ctx.fillRect(position.x, position.y, size, size); // desenha a snake no canvas
  });
};

export const moveSnake = () => {
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
