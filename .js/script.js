
document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector("form").addEventListener("submit", function(event){

        event.preventDefault();

        console.log("Vous avez envoyé le formulaire !");

    })
})