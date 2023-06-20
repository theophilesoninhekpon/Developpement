'use strict'

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function getSeconds(){

    setTimeout(() => {

        chrono.innerHTML = milliseconds; 
        console.log(chrono.innerHTML)
        seconds();

    }, 1)

    milliseconds++;

    if(milliseconds === 99){

        milliseconds = 0;
        seconds++;

    }
}

document.addEventListener("DOMContentLoaded", () =>{
    
    let chrono = document.getElementById("chrono") ;
    getSeconds();
    chrono.innerHTML = hours + " : " + minutes + " : " + seconds + " : " + milliseconds
    
})
    

    