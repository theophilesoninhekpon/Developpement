'use strict'

import Person from './Person.js';
import Employee from './Employee.js';
import Programmer from './Programmer.js';

let client = new Person("Thierry", 23);

console.log(client);
console.log(client.name)
client.present();
client.name = "Laurent";
console.log(client.name)

let director = new Employee("Jacques", 57, 1000000);

console.log(director);
director.present();

let developer = new Programmer("Warris", 32, 500000, ["HTML", "CSS", "JS"]);

console.log(developer);
developer.present();