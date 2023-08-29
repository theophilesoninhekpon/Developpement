<?php

declare(script_types=1);

// Crée et démarre une session ou la poursuit 
session_start();

if(!isset($_SESSION['isLogin'])) {
    $_SESSION['isLogin'] = true;
}

header('Location: /view.phtml', false, 301);