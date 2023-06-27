'use strict';

/************************************************************************************/
/****************************** DONNES **********************************************/
/************************************************************************************/
let canvasDom;
let context;
let ballAreaWidth;
let ballAreaHeight;

let ball = {
    x: 0,
    y: 0,
    color: "red",
    radius: 5,
    directionY: -1
}

let game = {
    width: 0,
    height: 0,
    color: "lightgray"
}


/************************************************************************************/
/****************************** FONCTIONS *******************************************/
/************************************************************************************/

function playGame(){

    ball.y += ball.directionY;
    
    console.log(ball.y)

    displayGame();

    if(ball.y < 0 || ball.y > game.height){

        ball.directionY = 1;
        
    }

    requestAnimationFrame(playGame);
}

function displayGame(){

    context.beginPath();

    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);

    context.stroke();

}


/************************************************************************************/
/****************************** LOGIQUE *******************************************/
/************************************************************************************/

document.addEventListener("DOMContentLoaded", ()=>{

    canvasDom = document.getElementById("canvas");

    context = canvasDom.getContext("2d");

    ballAreaWidth = ball.radius * 2;
    ballAreaHeight = ball.radius * 2;

    game.width = canvasDom.offsetWidth;
    game.height = canvasDom.offsetHeight;

    ball.x = (canvasDom.offsetWidth - ballAreaHeight) / 2;
    ball.y = canvasDom.offsetHeight - ballAreaHeight;

    context.strokeStyle = ball.color;

    context.fillStyle = ball.color;

    playGame();

})