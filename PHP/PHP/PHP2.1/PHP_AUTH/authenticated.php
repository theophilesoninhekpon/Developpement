<?php

/**
 * $_SERVER contient les informations sur
 * le serveur web, 
 * l'environnement d'exécution et
 * les requêtes HTTP
 */

//  définition des constantes
define("LOGIN", "toto");
define("PASSWORD", "nicolas");
// Variable qui stocke les erreurs
$errorMessage = [];

//  Test de l'envoi du formulaire
if (!empty($_POST)) {
    // les identifiants sont transmis
    if (!empty($_POST['login']) && !empty($_POST['pwd'])) {
        // Sont ils les mêmes que ceux enregistrés dans la BDD
        if($_POST['login'] !== LOGIN) {
            $errorMessage[0] = "Mauvais login";
        } else if ($_POST['pwd'] !== PASSWORD) {
            $errorMessage[1] = "Mauvais mot de passe";
        } else {
            // ouvre un session
            session_start();
            // on enregistre le login de session
            $_SESSION['login'] = LOGIN;
            // on redirige vers le fichier admin.php
            header('HTTP/1.1 302 Found');
            header('Location: /admin.php');
            exit;
        }
    }
}

echo "<pre>";
// print_r($_SERVER);
echo htmlspecialchars('<script>alert("virus")</script>');
echo "</pre>";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'authentification</title>
</head>
<body>
    <div class="container">
        <form action="<?= htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
            <fieldset>
                <legend>Identifiez-vous</legend>
                <?php if(!empty($errorMessage)): ?>
                <p>
                    <?= $errorMessage; ?>
                </p>
                <?php endif; ?>
                <p>
                    <label for="login">Login: </label>
                    <input type="text" name="login" id="login">
                </p>
                <p>
                    <label for="pwd">Mot de passe: </label>
                    <input type="password" name="pwd" id="pwd">
                </p>
                <p>
                    <button type="submit" name="submit">S'authentifier</button>
                </p>
            </fieldset>
        </form>
    </div>
</body>
</html>