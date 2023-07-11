'use strict'

const notes = [17, 14, 12, 13];
const [nicole, erfero, , martin] = notes;

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 24
}

console.log(nicole);
console.log(erfero);
console.log(martin);

const {age, lastname} = person; // const age = person.age; const lastname = person.lastname
const {age: a, lastname: b} = person; // const a = person.age; const b = person.lastname

console.log(age); // 
console.log(lastname);