'use strict'

import Person from "./Person.js";

class Employee extends Person{
    
    #wage;

    constructor(name, age, wage){

        console.log(` Appel du constructeur Employee. Création de l'employé ${name} !`);
        super(name, age)
        this.#wage = wage;

    }

    get wage(){

        return this.#wage;

    }

    set wage(newWage){

        this.#wage = newWage;

    }
    
    present(){

        console.log(` On m'appelle ${this.name} et j'ai ${this.age} ans.`)
    }
}

export default Employee;