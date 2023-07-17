'use strict';
let userName = "Tony";
let obj = { name: "john" };
class Person {
    constructor(name, firstName) {
        this.name = name;
        this.firstName = firstName;
    }
    present() {
        console.log(`Je m'appelle ${this.name} ${this.firstName}`);
    }
}
let user1 = new Person("Tony", "D'Almeida");
user1.present();
let x = 5;
const pi = 12.5;
let hex = 0xf00d; // hexadécimal
let bin = 0b0001; // binaire
let color = "blue";
let isFree = false;
let arr = [1, 2, 3, 4];
let strArr = ['a', 'b', 'c'];
let arr2 = ['a', 2];
let salary = 2500000400;
console.log(salary);
