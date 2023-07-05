'use strict'

class Person {

    #name;
    #age;

    constructor(name, age){

        console.log(` Appel du constructeur Person. Création de la personne ${name} !`);
        this.#name = name;
        this.#age = age;

    }

    get name(){

        return this.#name;
    }

    get age(){

        return this.#age;

    }

    set name(newName){

        this.#name = newName;

    }

    set age(newAge){

        this.#age = newAge;

    }
    
    present(){

        console.log(` On m'appelle ${this.#name} et j'ai ${this.#age} ans.`)
    }
}

export default Person;