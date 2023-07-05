import Request from "./Request.js";

export function dealWithForm(){

    let form = document.getElementById("form");

    form.addEventListener("submit", (event) =>{

    event.preventDefault();

    let inputs = document.querySelectorAll("input");

    let request = new Request();

    request.getInputs(inputs);

})
}

export function add(a, b){
    return a + b;
}

export function substract(a, b){
    return a - b;
}

export function multiply(a, b){
    return a * b;
}

export function divide(a, b){
    return a / b;
}