let d = document;
const canvas = d.querySelector("canvas");
const ctx = canvas.getContext("2d");

const menu = d.querySelector("menu_screen");
const score = d.querySelector(".score_value");
const buttonPlay = d.querySelector(".btn_play");
const finalScore = d.querySelector(".final_score > span");

const audio = new Audio("../assets/audio.mp3");

export { canvas, ctx, menu, score, buttonPlay, finalScore, audio };
