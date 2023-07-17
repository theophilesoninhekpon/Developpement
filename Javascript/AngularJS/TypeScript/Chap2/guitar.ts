'use strict'

abstract class Music{

    protected _instrument:string;
    abstract makeSound():string;

    play(): string{
        return "play music";
    }

    get instrument(): string {
        return this._instrument;
    }
    
}

class Guitar extends Music{
    
    _instrument:string = "Guitare";
   
}

let guitar = new Guitar();

console.log(guitar.instrument)