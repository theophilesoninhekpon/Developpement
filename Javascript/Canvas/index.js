'use strict';
document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");

    const context = canvas.getContext("2d");

    
    context.strokeRect(500, 500, 200, 200);
    
    context.font = "bolder 30px Courier New";
    
    context.fillStyle = "orangered";

    context.fillText("Hello", 50, 150);

    context.fillStyle = "lightgreen";

    context.fillText("world", 50+context.measureText("Hello").width+10, 150);


}) 