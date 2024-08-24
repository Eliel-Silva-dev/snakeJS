import { randomPosition, randomColor } from "../../../js/methods/methods.js";
import { ctx } from "./selectElement.js";
import { size } from "./variable.js";

export const food = {
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
