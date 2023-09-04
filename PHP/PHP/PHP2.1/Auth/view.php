<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Auth0</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php if(!isset($_SESSION['isLogin'])): ?> <!-- S'il n'y a pas de session, afficher la page de connexion -->
    <div class="container">
        <h1>Bienvenue sur Coder</h1>
        <p class="lead">La plateforme de référence des codeurs</p>
        <form action="controller.php" method="post" class="mt-4">
            <div class="mb-3">
                <label for="username">Nom:</label>
                <input class="form-control" type="text" name="uname" id="username">
            </div>
            <div class="mb-3">
                <label for="userpassword">Mot de passe:</label>
                <input class="form-control" type="password" name="upassword" id="userpassword">
            </div>
            <button type="submit" class="btn btn-white">Connexion</button>
        </form>
    </div>
    <?php else: ?>                             <!-- Si la session existe -->
    <div class="container">
        <nav class="navbar">
            <a href="#" class="navbar-brand">Auth0</a>
            <ul class="navbar-nav">
                <li class="nav-item"><a href="" class="nav-link">Accueil</a></li>
                <li class="nav-item"><a href="" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="" class="nav-link">Support</a></li>
                <li class="nav-item"><a href="./controller.php" class="nav-link">Logout</a></li>
            </ul>
        </nav>
        <div class="row">
            <h1>Bienvenur sur votre dashboard</h1>
        </div>
    </div>
    <?php endif; ?>
</body>
</html>