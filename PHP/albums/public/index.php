<?php

//  Constante qui sauvegarde le chemin de base de l'application
define("APP_ROOT", dirname(__DIR__));

require('../config/config.php');
require('../app/controllers/AlbumController.php');

// constante magique: constante prédéfinie ayant une signification particulière
/**
 * utilisée pour fournir des infos de contexte
 * toutes les constantes magiques commencent par  2 tirets de 8
 */
$request = $_SERVER['REQUEST_URI'];
$controller = new AlbumController();

$query_string_position = strpos($request, '?');

// if($query_string_position) {
//     $request = substr($request, $query_string_position + 1);
// }

if($query_string_position) {
    // si une route post avec paramètre
    if($query_string_position > 1){
    
        $request = strstr($request, "?", true);
       
    } else {
        $request = explode("=", $request)[1];
        
        // si une route avec plusieurs paramètres
        if(str_contains($request, "&")) {
            $request = strstr($request, "&", true);
        }
    }

}

switch ($request) {

    // Renvoie tous les albums
    case '/':
        $controller->index();
        break;

    case '/home':
        $controller->index();
        break;

    case 'addForm':
        $controller->create();
        break;

    case '/add': 
        if(!empty($_POST['title']) && !empty($_POST['artist'])) {
            $controller->store($_POST['title'], $_POST['artist']);
        }
        header('Location: /');
        break;

    case 'editForm':
        if(!empty($_GET['id'])) {
            $id = (int) $_GET['id'];
            $controller->edit($id);
        }
        break;
    
    case '/edit':
        if(!empty($_POST['title']) && !empty($_POST['artist']) && !empty($_POST['id'])) {
            $controller->update((int)$_POST['id'], $_POST['title'], $_POST['artist']);
        }
        header('Location: /');
        break;

    case '/delete':
        if(!empty($_GET['id'])) {
            $controller->destroy((int) $_GET['id']);
        }
        header('Location: /');
        break;

    default:
        require APP_ROOT . '/app/views/_404.phtml';

}
