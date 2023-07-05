
class Request {

    constructor(){

        this.inputs;

        
    }
    getInputs(inputs){

        this.inputs = inputs;
        
        inputs.forEach( (element) => console.log(element.value));

    }

}

export default Request