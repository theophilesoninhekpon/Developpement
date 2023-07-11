'use strict'

let x = 0;

/**
 * Fonction qui vérifie si un nombre est positif ou négatif
 * @param {number} num
 * @return true | false
 */

function isPositive(num) {

    // if(num >=0){
    //     return true;
    // } else{
    //     return false;
    // }

    return num >= 0 ? `${num} est positif` : `${num} est négatif`;
}

console.log(isPositive(3));
console.log(isPositive(-3));