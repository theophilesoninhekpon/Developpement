'use strict'

class Product{

    private _name: string;
    protected _ref: number = 1000;

    constructor(name: string, ref: number){
        this._name = name;
        this._ref = ref;
    }

    get name(): string {
        return this._name;
    }

    get ref(): number {
        return this._ref;
    }

    set name(name: string){
        this._name = name;
    }

    set ref(ref: number){
        this._ref = ref;
    }

}

let bike = new Product("Super Bike", 4000);

bike.name = "Super Matéo";

bike.ref = 1_300_000;

console.log(bike.name, bike.ref);


function add(a: number | string, b: number | string): number{

    if(typeof a === "string" && typeof b === "string"){
        return parseInt(a) + parseInt(b);
    } else if(typeof a === "number"  && typeof b === "number"){
        return a + b;
    }
    return -1;

}

interface Rect {
    x: number, 
    y: number
}

interface Circle {
    cx: number,
    cy: number,
    cr: Number
}

let shape: Rect | Circle = {
    x: 23,
    y: 43
}

type User = {
    id?: number,  // id est optionel
    fname: string,
    lname: string,
    age?: number // age est optionel
}

let u: User = {
    fname: "Tony",
    lname: "Rival"
}

u.id = 3;

console.log(u.id)


// Les classes

class Person {

    protected fname: string; // Propriété | membre | champ de la classe
    protected lname: string; // Propriété | membre | champ de la classe
    
    constructor(fname:string, lname:string){
        this.fname = fname;
        this.lname = lname;
    }

    // get fname(): string{

    //     return this._fname;

    // }

    getfname(): string{

        return this.fname;

    }
}

const p1 = new Person("John", "Doe");
console.log(p1.getfname())


class Customer{

    constructor(
        protected fname: string,
        protected lname: string,
        private age: number
    ){}

}

let first = new Customer("Jean", "Jean", 24)

console.log(first);


class Programer extends Person{

    constructor(
        fname: string,
        lname: string,
        private languages: string[]
    ){
        super(fname, lname)
    }

    present(): string {
        return ` ${this.fname} ${this.lname} maîtrisent les languages suivants: ${this.languages.join(", ")}`
    }
}

let developer = new Programer ("John", "Doe", ["Perl", "Javascript", "C++"])

console.log(developer.present()
)

function addNumbers<TypeVariable>(a: TypeVariable): TypeVariable {

    return a;

}

addNumbers<string>("Hello");
addNumbers<boolean>(true);
addNumbers<number>(12);




abstract class Forme {
    show(){

        console.log("Je suis une forme géométrique");
        
    }

    abstract calculateArea(): number;
}

class Rectangle extends Forme {

    constructor(
        public longueur: number,
        public largeur: number,
    ){
        super()
    }

    calculateArea(): number {
        return this.longueur * this.largeur;
    }

}

class Circle extends Forme{

    constructor(
        public radius: number
    ){
        super()
    }

    calculateArea(): number {
        return (this.radius**2) * Math.PI;
    }
}

class Triangle extends Forme{

    constructor(
        public base: number,
        public height: number
    ){
        super()
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}

let circle = new Circle(4);
console.log(circle.calculateArea())