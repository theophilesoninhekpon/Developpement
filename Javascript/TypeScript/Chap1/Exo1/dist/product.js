'use strict';
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
