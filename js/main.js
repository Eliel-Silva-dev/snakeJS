import { randomNumber } from "./methods/methods.js";

let loopId;

const gameloop = () => {
  clearTimeout(loopId);
  console.log('teste');

  loopId = setTimeout(() => {
    gameloop();
  }, 300);
};

document.addEventListener('keydown', ({ key }) => {
  console.log('tecla digitada: ', key);
});

gameloop();
