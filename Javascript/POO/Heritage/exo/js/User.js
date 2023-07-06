'use strict'

class User{
    
    #name;
    #firstName;
    #job;

    constructor(name, firstName, job = null){

        this.#name = name;
        this.#firstName = firstName;
        this.#job = job;

    }

    fullName(){

        return `${this.#firstName} ${this.#name} est ${this.#job}`;

    }

    get job(){

        return this.#job;

    }

    set job(newJob){

        this.#job = newJob;

    }
}

export default User;