"use strict";

import { ctx } from "./selectElement";
import {size} from './variable';

const initialPosition = { x: 270, y: 240 }; // posição inicial da snake

let snake = [initialPosition];

export const drawSnake = () => {
  ctx.fillStyle = "#ddd"; // cor da snake

  snake.forEach((position, idx) => {
    if (idx == snake.length - 1) { // se for a ultima posição (a cabeça da snake) - aplica a cor branca;
      ctx.fillStyle = "white";
    }

    ctx.fillRect(position.x, position.y, size, size); // desenha a snake no canvas
  });
};

