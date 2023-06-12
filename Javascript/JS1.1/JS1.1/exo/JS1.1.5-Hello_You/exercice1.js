/**
 * Créer ici le projet « Hello You ».
 */
let firstName = window.prompt("Quel est votre prénom ?");
let lastName = window.prompt("Quel est votre nom ?");
let birthdateYear = window.prompt("Quel est votre année de naissance ?");
let age = 2023 - Number(birthdateYear);

let greeting = "Salut " + firstName + " " + lastName + ", cette année tu as " + age + " ans !";

console.log(greeting);