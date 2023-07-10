'use strict'

import Snake from './Snake.js'
import Game from './Game.js'

document.addEventListener('DOMContentLoaded', ()=>{

    let canvas = document.getElementById("canvas");
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let game = new Game(canvasWidth, canvasHeight)
    let snake = new Snake(10, 10, 10, 10, "green", game);

    snake.displaySnake()
})