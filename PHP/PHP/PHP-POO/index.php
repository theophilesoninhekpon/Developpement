<?php

include "./generic_functions.php";

/**
 *  Fonction d'autoloading...
 *  permet de charger automatiquement les classes
 */

spl_autoload_register(function ($class_name) {
    echo "A1 <br>";
    $file = "app/controllers/" . $class_name . ".php";
    if(file_exists($file)) {
        require $file;
    }
});
spl_autoload_register(function ($class_name) {
    echo "A1 <br>";
    $file = "app/models/" . $class_name . ".php";
    if(file_exists($file)) {
        require $file;
    }
});
spl_autoload_register(function ($class_name) {
    echo "A1 <br>";
    $file = "app/" . $class_name . ".php";
    if(file_exists($file)) {
        require $file;
    }
});

// $person = new Person;
// $programmer = new Programmer;
$u1 = new User();

dd($u1);

echo $u1->nom;
echo $u1->prenom;

$u1->present();
