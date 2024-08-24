import { ctx } from '../selectElements/selectElement.js';
import { canvas } from '../selectElements/selectElement.js';

export const drawGrid = () => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#191919';

  for (let i = 30; i < canvas.width; i += 30) {
    ctx.beginPath();
    ctx.lineTo(i,0);
    ctx.lineTo(i,600);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(0, i);
    ctx.lineTo(600,i);
    ctx.stroke();
  }
};
