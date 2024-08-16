import { audio, canvas, finalScore, menu, score } from '../selectElements/selectElement.js';
import { size } from '../variables/variable.js';
import { snake } from '../snake/snake.js';
import { food } from '../food/food.js';
import { direction } from '../main.js';

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

export const incrementScore = () => {
  score.textContent = +score.textContent + 10;
};

export const chackEat = () => {
  const head = snake[snake.length - 1];

  if (head.x == food.x && head.y == food.y) {
    incrementScore();
    snake.push(head);
    audio.play;

    let x = randomPosition();
    let y = randomPosition();

    while (snake.find((position) => position.x == x && position.y == y)) {
      x = randomPosition();
      y = randomPosition();
    }

    food.x = x;
    food.y = y;
    food.color = randomColor();
  }
};

export const gameOver = () => {
  direction = undefined; // parar a movimentação
  menu.style.display = 'flex'; // mostra o menu
  finalScore.textContent = score.textContent; // add o score atual ao score final
  canvas.style.filter = 'blur(2px)'; // desfoca a o fundo do game
};

export const checkCollision = () => {
  const head = snake[snake.length - 1]; // posição da cabeça
  const canvasLimit = canvas.width - size; // limite que a snake pode ir
  const neckIndex = snake.length - 2; // posição do pescoço

  const wallCollision = // bateu na perede?
    head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit;

  const selfCollision = snake.find((position, idx) => {
    // bateu em si mesma? se sim retorna um objeto que sera convertido em boolean no if
    return idx < neckIndex && position.x == head.x && position.y == head.y;
  });

  if (wallCollision || selfCollision) {
    gameOver();
  }
};
