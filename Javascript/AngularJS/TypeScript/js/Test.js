'use strict';
var userName = "Tony";
var obj = { name: "john" };
var Person = /** @class */ (function () {
    function Person(name, firstName) {
        this.name = name;
        this.firstName = firstName;
    }
    Person.prototype.present = function () {
        console.log("Je m'appelle ".concat(this.name, " ").concat(this.firstName));
    };
    return Person;
}());
var user1 = new Person("Tony", "D'Almeida");
user1.present();
var x = 5;
var pi = 12.5;
var hex = 0xf00d; // hexadécimal
var bin = 1; // binaire
var color = "blue";
var isFree = false;
var arr = [1, 2, 3, 4];
var strArr = ['a', 'b', 'c'];
var arr2 = ['a', 2];
var salary = 2500000400;
console.log(salary);
// Fonctions
function add(a, b) {
    return a.concat(b);
}
