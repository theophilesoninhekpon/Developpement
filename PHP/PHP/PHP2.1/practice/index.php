<?php 
require './generic_functions.php';
#Fonction qui démarre une session côté serveur
session_save_path("C:/_programmes/laragon-6.0.0/tmp");

/**
 * créer une nouvelle session si on en avait pas, ou récupérer l'ancienne session
*/
session_start();

dd($_SESSION);
// echo 'John';


// print_r($_SESSION);

// if(empty($_SESSION["nom"])) {
//     $_SESSION["nom"] = 'John Doe';
// };

// dd($_SESSION);

// echo "<p> Hello {$_SESSION['nom']} </p>";


// Créer un cookie
// setcookie(clé, valeur, date_expiration)
// setcookie('school', 'HighFive', time() + 60*60);

// $_COOKIE: superglobale permettant d'accéder aux cookies côté client;
// dd($_COOKIE);
// echo time();

// fonction qui nous dit où sont stockés les sessions côté serveur
// echo "Session Path = ";
// echo "<br>";
// // fonction qui renvoie l'id de la session actuelle
// echo session_id();

// $_SESSION["firstname"] = "John";
// $_SESSION["lastname"] = "Doe";
// $_SESSION["age"] = 24;

// dd($_COOKIE);
// dd($_SESSION);

// $serializedData = 'firstname|s:4:"John";lastname|s:3:"Doe";age|i:24';

// // données (non sérialisées)
// $data = unserialize($serializedData);

// dd($data)
// $_COOKIE: superglobale permettant d'accéder aux cookies côté client 
/**
 * Une superglobale est une variable prédéfinie qui stocke des infos et des 
 * données importantes accessibles depuis n'importe où dans le script PHP sans avoir besoin de la déclarer explicitement 
 * comme une variable classique
 */


?>