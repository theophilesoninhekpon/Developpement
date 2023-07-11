/**
*   L'opérateur spread
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr5 = [...arr2, 7, 8, 9]

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

console.log({arr3, arr4});
console.log(...arr3);
console.log(...arr4)
console.log(...arr5)

// On peut copier une partie d'un tableau

let arr = [[1, 2, 3], 4, 5, 6];

// let arr8 = [...arr[0]]; 


// console.log(..."bonjour");
// // console.log(...1);


// // Simplifier la syntaxe des objets

// const obj = {
//     a:a,
//     b:b
// }
// // ou
// const obj2 = {
//     a, b
// }



// Rest parameter

function add(a, b, ...args){

    console.log(a);
    console.log(b);
    console.log(args);

}

add(2,3,4,5,6,7);