const size = 30; // tamanho padrão dos blocos

const initialPosition = { x: 270, y: 240 }; // posição inicial da snake

let direction = "";

let loopId;

let snake = [initialPosition];

export { size, initialPosition, direction, loopId, snake };
