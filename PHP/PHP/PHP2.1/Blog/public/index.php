<?php

require "../app/Views/AuthView.php";
require "../app/Models/AuthModel.php";
require "../app/Controllers/AuthController.php";

$view = new AuthView();
$model = new AuthModel();
$controller = new AuthController($model);

/**
 * Le point d'entrée (également front controller) est un fichier PHP unique qui agit comme le point de départ de votre app
 * web. Il reçoit toutes les requêtes HTTP entrantes et dirige le flux de contrôle vers les composantes appropriées (contrôleurs,
 * vues, modèles) en fonction de l'URL ou d'autres paramètres
 */


if(isset($_GET['action'])) {

    // l'utilisateur veut s'inscrire 
    if ($_GET['action'] === "signup") {
        // appeler le contrôleur approprié
        $controller->signupAction($_POST['username'],$_POST['password']);
        echo "<pre>";
    }
    // l'utilisateur veut se connecter
    if ($_GET['action'] === "login") {
        // appeler le contrôleur approprié
        $controller->signupAction($_POST['username'],$_POST['password']);
    }

 } else {

     $view->showSignupForm();
     
     $view->showLoginForm();

 }



