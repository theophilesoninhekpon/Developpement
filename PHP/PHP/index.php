<?php

//

/**
 *  Ne plus afficher d'erreur
 *  error_reporting(0);
 * 
 *  Afficher toutes les erreurs
 *  error_reporting(-1);
 * 
 * E_ERROR: les erreurs sont affichées par défaut
 * E_WARNING: les avertissements sont affichés par défaut
 * E_ALL: toutes les erreurs et alertes sont affichées
 */

// Afficher toutes les erreurs
// error_reporting(-1); // E_ALL

// error_reporting(E_WARNING);

require("./generic_functions.php");

// die("Une erreur est survenue !");

// throw new Exception("Une erreur est survenue !");

function inverser(int $num) {
    if($num === 0) {
        throw new Exception("Division par zéro");
    }
    return 1 / $num;
}


try {

    echo "<pre>";
    echo inverser(10) . "\n";
    echo inverser(15) . "\n";
    echo inverser(0) . "\n";
    echo "</pre>";
} catch (Exception $e) {
    echo "Impossible de diviser un nombre par zéro";
}

function calcul (& $var) {
    $var++;
}

$a = 5;
$b = & $a;
calcul($a);
unset($a);
echo '<br>';
echo "b vaut maintenant $b";