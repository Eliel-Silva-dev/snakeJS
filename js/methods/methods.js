import { canvas, score } from '../selectElements/selectElement.js';
import { size } from '../variables/variable.js';

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomPosition = () => {
  const number = randomNumber(0, canvas.width - size);
  return Math.round(number / 30) * 30;
};

const randomColor = () => {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

export const incrementScore = () => {
  score.textContent = +score.textContent + 10;
};

export { randomNumber, randomPosition, randomColor };
