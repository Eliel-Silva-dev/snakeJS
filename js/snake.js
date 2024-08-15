"use strict";

import { ctx } from "./selectElement";
import { size, direction } from "./variable";

const initialPosition = { x: 270, y: 240 }; // posição inicial da snake

let snake = [initialPosition];

export const drawSnake = () => {
  ctx.fillStyle = "#ddd"; // cor da snake

  snake.forEach((position, idx) => {
    if (idx == snake.length - 1) {
      // se for a ultima posição (a cabeça da snake) - aplica a cor branca;
      ctx.fillStyle = "white";
    }

    ctx.fillRect(position.x, position.y, size, size); // desenha a snake no canvas
  });
};

export const moveSnake = () => {
  const head = snake[snake.length - 1];

  if (direction == "right") {
    snake.push({x: head.x + size, y: head.y});
  }
  if (direction == "left") {
    snake.push({x: head.x - size, y: head.y});
  }
  if (direction == "down") {
    snake.push({x: head.x, y: head.y + size});
  }
  if (direction == "up") {
    snake.push({x: head.x, y: head.y - size});
  }

  snake.shift();
};
