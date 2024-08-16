export let d = document;
export const canvas = d.querySelector('canvas');
export const ctx = canvas.getContext('2d');

export const menu = d.querySelector('.menu_screen');
export const score = d.querySelector('.score_value');
export const buttonPlay = d.querySelector('.btn_play');
export const finalScore = d.querySelector('#fn_score');

export const audio = new Audio('../assets/audio.mp3');
