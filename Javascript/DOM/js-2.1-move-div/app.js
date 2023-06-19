/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  .
*/

document.addEventListener("DOMContentLoaded", function(){
    
    let count =  0;
    const redDiv = document.querySelector(".red");
    document.querySelector("#moveDiv").addEventListener("click", function(){
        ++count;

        if (count === 1){
            redDiv.classList.add("moveRight");
        } else if( count === 2){
            redDiv.classList.add("moveDown");
        }
    })
});
/*

Un deuxième bouton doit servir à masquer le modal.

*/
