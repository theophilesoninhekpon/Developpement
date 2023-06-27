'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded',function(){

        let canvas = document.getElementById("canvas");

        let context = canvas.getContext("2d");

        context.fillStyle = "red";

        context.font = "bold 50px Courier New"

        context.fillText("Hello", 300, 300);

        context.fillStyle = "blue";

        context.fillText("world", 300+context.measureText("Hello").width+10, 300);

        context.fillStyle = "green";

        context.fillText("!", 300+context.measureText("Hello").width+10+context.measureText("world").width+10, 300)


});