export const d: Document = document;
export const canvas = d.querySelector('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export const menu = d.querySelector('.menu_screen') as HTMLDivElement;
export const score = d.querySelector('.score_value') as HTMLSpanElement;
export const buttonPlay = d.querySelector('.btn_play') as HTMLButtonElement;
export const finalScore = d.querySelector('#fn_score') as HTMLSpanElement;

export const audio: HTMLAudioElement = new Audio('../assets/audio.mp3');
