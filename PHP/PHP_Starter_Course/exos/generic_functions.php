<?php

/**
* Renvoie la date et l'heure actuelle
*/
function getCurrentDateTime() {
   return 'Nous sommes le ' . date("d:m:y") . ', il est ' . date("h:i:s");
}

/**
* Renvoie un nombre et sa parité
*/
function chooseRandomNumberAndParity(){
   $randomNumber = rand(0, 9);

   return "J'ai choisi le nombre " . $randomNumber . " .C'est un nombre " . checkEvenOdd($randomNumber);
}

/**
* Détermine la parité d'un nombre
*/
function checkEvenOdd(int $number) {

   $parity = ""; 
   
   if($number % 2 === 1){
       return $parity = "impair";
   } else {
       return $parity = "pair";
   }
}

/**
* Inverse le nom du robot
*/
function reverseName(string $name) {
   return " Mon nom à l'envers s'écrit " . strrev($name) . ". Ah. Ah. Ah.";
}


function haveMatched(string $name){
   if(empty($name)){
      return;
   }
   return preg_match("/[A-Z]{2}-[0-9]{4}/i", $name);
}
?>