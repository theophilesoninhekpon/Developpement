const magicNumber = 15;
let number = Number(window.prompt("Veuillez deviner le nombre magique !"));
let numberOfTry = 0;

while(number !== magicNumber ){
  
  ++numberOfTry;
  
  if(number < magicNumber){

    number = Number(window.prompt("Il est encore en haut le nombre magique !"));

  } else if (number > magicNumber){

    number = Number(window.prompt("Il est encore en bas le nombre magique !"));

  }

}

alert(`Vous avez gagné ! Eh bah 😃 le nombre magique était ` + magicNumber + `.\n` +
       `Vous avez essayé ` + numberOfTry + ` fois.`);