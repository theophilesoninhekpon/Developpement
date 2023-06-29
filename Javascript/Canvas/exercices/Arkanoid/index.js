'use strict';

/************************************************************************************/
/****************************** DONNES **********************************************/
/************************************************************************************/
let canvasDom;
let context;
let ballAreaWidth;
let ballAreaHeight;
let animationID;
let count = 0;

// Représentation de la balle
let ball = {
    x: 270,
    y: 485,
    color: "red",
    radius: 15,
    directionY: -1,
    speed : 10
}

// Représentation de l'espace de jeu
let game = {
    width: 550,
    height: 600,
    color: "lightgray",
    gameOver: false,
    start: false,
    pause: false
}

// Représentation du plateau
let paddle = {
    x: 250,
    y: 500,
    speed: 25,
    color: "blue",
    width: 100,
    height: 50,
    directionX: 1
}

/************************************************************************************/
/****************************** FONCTIONS *******************************************/
/************************************************************************************/

function playGame(){
    
    
    if(ball.y < ball.radius ){

        ball.directionY = 1;
        
    } else if ( ball.y > game.height - ball.radius) {

        ball.directionY = -1;

    }
    
    detectCollisions();

    displayGame();

}


function displayGame(){
    
    // Dessin de la balle
        if( game.gameOver === false){

            context.clearRect(0,  0, 1900, 550)

            context.strokeStyle = ball.color;

            context.fillStyle = ball.color;

            context.beginPath();
        
            context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            
            context.stroke();
            
            context.fill();

            context.strokeStyle = paddle.color;

            context.fillStyle = paddle.color;

            context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)

            animationID = requestAnimationFrame(playGame);

        } else{

            cancelAnimationFrame(animationID);

            context.font = "bold 30px Courier New";

            context.fillText("Game over", game.width / 2 - context.measureText("Game over").width / 2, game.height /2  )
        }
        

    // Dessin du plateau

}


function initGame() {

    canvasDom = document.getElementById("canvas");

    context = canvasDom.getContext("2d");

    // Premier affichage de la balle et du plateau

    context.clearRect(0,  0, 1900, 550)

    context.strokeStyle = ball.color;

    context.fillStyle = ball.color;

    context.beginPath();
        
    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            
    context.stroke();
            
    context.fill();

    context.strokeStyle = paddle.color;

    context.fillStyle = paddle.color;

    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)




    ballAreaWidth = ball.radius * 2;
    ballAreaHeight = ball.radius * 2;

    context.strokeStyle = paddle.color;

    context.fillStyle = paddle.color;

    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)

    // Gestionnaire d'évènement de l'appui sur le clavier

    document.addEventListener("keydown", function keyboardEvent(event){

            paddle.speed = 25;

        if(event.code === "ArrowRight"){

            paddle.directionX = 1;
            paddle.x += paddle.directionX * paddle.speed;
            
        } else if(event.code === "ArrowLeft"){

            paddle.directionX = -1;
            paddle.x += paddle.directionX * paddle.speed;
        }

        if(game.start === false){

            ball.x = paddle.x + paddle.width / 2;
            ball.y = paddle.y - ball.radius;

            context.clearRect(0,  0, 1900, 550);
            context.strokeStyle = ball.color;
            context.fillStyle = ball.color;
            context.beginPath();
            context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            context.stroke();
            context.fill();
            context.strokeStyle = paddle.color;
            context.fillStyle = paddle.color;
            context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

        }
        
        if(paddle.x > game.width - paddle.width){

            paddle.x = game.width - paddle.width;
            paddle.speed = 0;

        } else if(paddle.x < 0) {

            paddle.x = 0;
            paddle.speed = 0;

        }

        if(event.code === "Space"){

            count++;

            if(count % 2 === 0){

                game.pause = true;
                cancelAnimationFrame(animationID);

            } else if( count % 2 === 1){

                game.pause = true;
                playGame();

            } 
            
        }

    })

}

// Dectection de la collision entre la balle et le plateau

function detectCollisions(){

    if(ball.y === game.height - paddle.height - ball.radius && (ball.x > paddle.x && ball.x < paddle.x + paddle.width)){

        ball.directionY = -1;

    } else if(ball.y === game.height - ball.radius){
        
        game.gameOver = true;
        ball.directionY = 0;

    }

    ball.y += ball.directionY * ball.speed;

    return game.gameOver;
    
}

function initPositions(){

    ball.x = paddle.x + paddle.width / 2;

    ball.y = paddle.y - ball.radius;

    ball.directionY = 0;

}

/************************************************************************************/
/****************************** LOGIQUE *******************************************/
/************************************************************************************/

document.addEventListener("DOMContentLoaded", ()=>{

    initPositions();
    initGame();

})