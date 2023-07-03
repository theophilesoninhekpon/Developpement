
class Request {

    constructor(inputs){

        this.inputs;

    }

    getInputs(inputs){

        this.inputs = inputs;
        
        inputs.forEach( (element) => console.log(element.value));

    }

}

let form = document.getElementById("form");

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    let inputs = document.querySelectorAll("input");

    let request = new Request();

    request.getInputs(inputs);

})