/**
 * Calculawrite
 */

/**
 * Créer ici le projet « Calculaprompt ».
 */

// Définitions des variables
let firstNumber;
let secondNumber;
let operator;
let compute;

firstNumber = Number(window.prompt("Tapez le premier nombre !"));

while(isNaN(firstNumber)) {                                                                 

    firstNumber = Number(window.prompt("Veuillez taper un nombre valide !"));

    console.error("Erreur:" + firstNumber + " n'est pas un nombre !");                    
} 


operator = window.prompt("Tapez l'opérateur !");

while(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "." && operator !== "x" && operator !== "/" && operator !== "÷" ) {                                                                 

    operator = window.prompt("Veuillez taper un opérateur parmi les suivants: +, -, *, ., x, /, ÷ !");

    console.error("Erreur:" + operator + " n'est pas un opérateur valide !");                    
} 


secondNumber = Number(window.prompt("Tapez le second nombre !"));

while (isNaN(secondNumber)){

    secondNumber = Number(window.prompt("Veuillez taper un nombre valide !"));

    console.error("Erreur:" + secondNumber + " n'est pas un nombre !");                   
}

compute = firstNumber + " " + operator + " " + secondNumber; 

switch (operator) {
    case "+":
        result = firstNumber + secondNumber;
        break;

    case "-":
        result = firstNumber - secondNumber;
        break;

    case "*":
        result = firstNumber * secondNumber;
        break;

    case "x":
        result = firstNumber * secondNumber;
        break;

    case ".":
        result = firstNumber * secondNumber;
        break;

    case "/":
        result = firstNumber / secondNumber;
        break;

    case "÷":
        result = firstNumber / secondNumber;
        break;

    default:
        console.log("L'opérateur n'est pas pris en compte !");
}

document.write("Votre calcul : " + compute + "<br>");                               // Affiche le calcul sur la page
document.write("Le résultat  : " + result);  
