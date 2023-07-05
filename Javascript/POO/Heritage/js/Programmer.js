'use strict'

import Employee from "./Employee.js";

class Programmer extends Employee{

    #language;

    constructor(name, age, wage, language){

        console.log(` Appel du constructeur Programmer. Création du programmeur ${name} !`);
        super(name, age, wage);
        this.#language = language;

    }

    get language(){

        return this.#language;
        
    }

    set language(newLanguage){

        this.#language = newLanguage;

    }

        present(){

            console.log(` On m'appelle ${this.name} et j'ai ${this.age} ans.`)
            
        }
    }

export default Programmer;