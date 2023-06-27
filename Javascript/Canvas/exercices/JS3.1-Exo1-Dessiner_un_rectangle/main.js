'use strict';

document.addEventListener('DOMContentLoaded',function(){

   let canvas = document.getElementById("canvas");

   let context = canvas.getContext("2d");

   context.strokeStyle = "#000";

   context.strokeRect(100, 100, 500, 500);

   context.strokeStyle = "green";

   context.strokeRect(150, 150, 300, 300);

   context.strokeStyle = "white";

   context.fillStyle = "red";

   context.fillRect(250, 250, 300, 300);


});