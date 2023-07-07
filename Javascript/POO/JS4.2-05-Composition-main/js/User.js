'use strict'

import Age from "./Age.js"
class User{
    
    #name;
    #firstName;
    #job;
    #age;

    constructor(name, firstName, job = null, age){

        this.#name = name;
        this.#firstName = firstName;
        this.#job = job;
        this.#age = new Age(age);
    }

    get age(){

        return this.#age.getAge();

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