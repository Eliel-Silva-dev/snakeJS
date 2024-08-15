"use strict";

import { canvas } from "./selectElement";
import { size } from "./variable";

export const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const randomPosition = () => {
  const number = randomNumber(0, canvas.width - size);
  return Math.round(number / 30) * 30;
};

export const randomColor = () => {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
};
