'use strict';

// On défini la propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length:20,
    x:10,
    y:10
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;

function displaySquare(){

    if( square.x === canvasDom.offsetWidth ){
        square.x = 10;
    }
    if( square.y === canvasDom.offsetHeight ){
        square.y = 10;
    }
    
    ctx.fillRect(square.x, square.y, square.length, square.length);

}

// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {

    canvasDom = document.getElementById("canvas");

    ctx = canvasDom.getContext("2d");

    ctx.strokeStyle = square.color;

    ctx.fillStyle = square.color;

    document.addEventListener("keydown", (event)=>{

        ctx.clearRect(square.x, square.y, square.length, square.length);

        if(event.code === "ArrowUp"){

            square.y -= 10;
        
        } else if(event.code === "ArrowDown"){

            square.y += 10;
        
        } else if(event.code === "ArrowLeft"){

            square.x -= 10;
        
        } else if(event.code === "ArrowRight"){

            square.x += 10;
        
        }

        displaySquare();
    })
});