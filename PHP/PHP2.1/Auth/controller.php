<?php

declare(strict_types=1);

// Crée et démarre une session ou la poursuit 
session_start();

$users = ['Theo', 'Jean', 'Sam']; 

if(!isset($_SESSION['isLogin']) && !empty($_POST['uname']) && !empty($_POST['upassword'])) {
    
    if(in_array($_POST['uname'] , $users)) {

        $_SESSION['isLogin'] = true;
        $_SESSION['uname'] = $_POST['uname'];
        $_SESSION['upassword'] = $_POST['upassword'];
        header('Location: /view.php', false, 301);
        exit;
        
    } else {
        
        $_SESSION['isLogin'] = false;
        header('Location: /view.php', false, 301);
        exit;

    }
}

// Détruire la session à la déconnexion

unset($_SESSION['isLogin']);


header('Location: /view.php', false, 301);