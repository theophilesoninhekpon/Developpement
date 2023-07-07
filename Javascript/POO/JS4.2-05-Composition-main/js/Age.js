'use strict'

class Age {

    #age;

    constructor(age){

        this.#age = age;

    }

    getAge(){

        if( this.#age >= 10 && this.#age <= 150 && !isNaN(this.#age)){

            return this.#age;

        } else {

            return null;

        }
    }
}

export default Age;