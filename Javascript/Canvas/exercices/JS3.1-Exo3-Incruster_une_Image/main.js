'use strict';


document.addEventListener('DOMContentLoaded', function () {

    let canvas = document.getElementById("canvas");

    let context = canvas.getContext("2d");

    let img = new Image();

    img.src = "dining-3.jpg";

    img.addEventListener("load", ()=>{

        context.drawImage(img, 20, 20);
        
    })
});