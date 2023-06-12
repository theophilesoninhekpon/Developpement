// const tabDim1 = ["bonjour",[12, 48, 18, 12, {prop: "val", nom:{"nomEtu": "Oswald"}}]];

// for (let i = 0; i < tabDim1.length; i++){

//     document.write(tabDim1[i] + "<br>");

//     for( let j = 0; i < tabDim1[i][j].length; j++){
        
//         document.write(tabDim1[i][j] + "<br>");

//     }
// }

let firstName = window.prompt("Quel est votre nom ?");
let lastName = window.prompt("Quel est votre prénom ?");
let greeting = "Bonjour ".concat(firstName, " ", lastName) ;

document.write(greeting);