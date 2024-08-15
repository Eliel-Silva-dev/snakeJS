import { audio, canvas, score } from '../selectElements/selectElement.js';
import { size } from '../variables/variable.js';
import {snake} from '../snake/snake.js';
import { food } from '../food/food.js';

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

export const chackEat = () => {
  const head = snake[snake.length - 1];

  if(head.x == food.x && head.y == food.y) {
    incrementScore();
    snake.push(head);
    audio.play;

    let x = randomPosition();
    let y = randomPosition();

    while(snake.find((position) => position.x == x && position.y == y)) {
      x = randomPosition();
      y = randomPosition();
    }

    food.x = x;
    food.y = y;
    food.color = randomColor();
  }
};

export { randomNumber, randomPosition, randomColor };
