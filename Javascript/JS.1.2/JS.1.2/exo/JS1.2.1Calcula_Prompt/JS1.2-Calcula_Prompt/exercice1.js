/**
 * Créer ici le projet « Calculaprompt ».
 */

// Définitions des variables
let firstNumber = Number(window.prompt("Tapez le premier nombre !"));
let operator = window.prompt("Tapez l'opérateur !");
let secondNumber = Number(window.prompt("Tapez le second nombre !"));
let compute;
let result;


if (isNaN(firstNumber)) {                                                                 // Vérifie si les deux entrées sont bien des nombres

    console.error("Erreur:" + firstNumber + " n'est pas un nombre !");                    // Affiche l'erreur à la console

} else if (isNaN(secondNumber)){

    console.error("Erreur:" + secondNumber + " n'est pas un nombre !");                   // Affiche l'erreur à la console

} else {

    compute = firstNumber + " " + operator + " " + secondNumber;                          // Stocke le calcul à afficher

    // Bloc avec switch
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

        case "/":
            result = firstNumber / secondNumber;
            break;
        
        default: 
            console.log("l'opérateur n'est pas pris en compte ! Veuillez entrer un opérateur valide")
    }

    document.write("Votre calcul : " + compute + "<br>");                               // Affiche le calcul sur la page
    document.write("Le résultat : " + result);                                          // Affiche le résultat du calcul sur la page
}
 