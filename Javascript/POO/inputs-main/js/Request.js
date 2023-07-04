
class Request {

    getInputs(inputs){

        this.inputs = inputs;
        
        inputs.forEach( (element) => console.log(element.value));

    }

}

export {Request}