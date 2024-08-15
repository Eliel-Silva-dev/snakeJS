"use strict";

import { randomPosition, randomColor } from "./methods";
import { ctx } from "./variable";

const food = {
  x: randomPosition(),
  y: randomPosition(),
  color: randomColor(),
};

export const drawFood = () => {
  const { x, y, color } = food;

  ctx.shadowColor = color;
  ctx.shadowBlur = 6;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  ctx.shadowBlur = 0;
};
