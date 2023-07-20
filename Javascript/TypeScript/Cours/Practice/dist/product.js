'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Product {
    constructor(name, ref) {
        this._ref = 1000;
        this._name = name;
        this._ref = ref;
    }
    get name() {
        return this._name;
    }
    get ref() {
        return this._ref;
    }
    set name(name) {
        this._name = name;
    }
    set ref(ref) {
        this._ref = ref;
    }
}
let bike = new Product("Super Bike", 4000);
bike.name = "Super Matéo";
bike.ref = 1300000;
console.log(bike.name, bike.ref);
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}
let shape = {
    x: 23,
    y: 43
};
let u = {
    fname: "Tony",
    lname: "Rival"
};
u.id = 3;
console.log(u.id);
// Les classes
class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    // get fname(): string{
    //     return this._fname;
    // }
    getfname() {
        return this.fname;
    }
}
const p1 = new Person("John", "Doe");
console.log(p1.getfname());
class Customer {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}
let first = new Customer("Jean", "Jean", 24);
console.log(first);
class Programer extends Person {
    constructor(fname, lname, languages) {
        super(fname, lname);
        this.languages = languages;
    }
    present() {
        return ` ${this.fname} ${this.lname} maîtrisent les languages suivants: ${this.languages.join(", ")}`;
    }
}
let developer = new Programer("John", "Doe", ["Perl", "Javascript", "C++"]);
console.log(developer.present());
function addNumbers(a) {
    return a;
}
addNumbers("Hello");
addNumbers(true);
addNumbers(12);
class Forme {
    show() {
        console.log("Je suis une forme géométrique");
    }
}
class Rectangle extends Forme {
    constructor(longueur, largeur) {
        super();
        this.longueur = longueur;
        this.largeur = largeur;
    }
    calculateArea() {
        return this.longueur * this.largeur;
    }
}
class Circle extends Forme {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return (this.radius ** 2) * Math.PI;
    }
}
class Triangle extends Forme {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}
let circle = new Circle(4);
console.log(circle.calculateArea());
// DECORATEURS
let obj = {
    name: "Toni",
    age: 23
};
// // console.log(obj.age)
// Object.defineProperty(obj, "age", {
//     // writable: false,
//     // enumerable: false,
//     configurable: false
// });
// Object.defineProperty(obj, "age", {
//     // writable: false,
//     // enumerable: false,
//     configurable: true
// });
for (const key in u) {
    console.log(key);
}
// obj.age = 30;
// console.log(obj.age)
function decorer(target, key, descriptor) {
    console.log(descriptor.value);
}
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return this.name;
    }
}
__decorate([
    decorer
], Subscriber.prototype, "greet", null);
let subscriber = new Subscriber("Tony");
subscriber.greet();
function logClass(target) {
    // fait référence à la classe qui est décorée
    console.log(`Classe ${target} a été décorée`);
}
let MaClasse = class MaClasse {
    constructor() {
        console.log("Instance de MaClasse créée !");
    }
};
MaClasse = __decorate([
    logClass
], MaClasse);
