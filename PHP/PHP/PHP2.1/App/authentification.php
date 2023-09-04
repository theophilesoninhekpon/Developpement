<?php

$users = [
    "Jean" => "Tournesol",
    "Tony" => "Firmament",
    "Wil" => "Internet20"
];

$errorMessage = "";

if(!empty($_POST)) {

    if(!empty($_POST['uname'] && !empty($_POST['password']))) {

        if($users[$_POST['uname']] && $_POST['password'] === $users[$_POST['uname']]) {
    
            session_start();
    
            $_SESSION['uname'] = $_POST['uname'];
    
            header('Location: /index.php', false, 301);
    
            exit;
    
        } else {
            $errorMessage = "Identifiants invalides";
        }
    
    } else {
        $errorMessage = "Veuillez renseigner vos identifiants !";
    }
}

require("header.php");
?>

<body>
    <div class="container justify-content-center align-items-center">
        <div class="row">
            <div class="col col-5">
                <form action="<?= htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
                    <?php if ($errorMessage) : ?>
                        <p> <?= $errorMessage ?></p>
                    <?php endif; ?>
                    <div class="mb-3">
                        <label for="uname">Nom</label>
                        <input class="form-control" type="text" id="uname" name="uname">
                    </div>
                    <div class="mb-3">
                        <label for="password">Mot de passe</label>
                        <input class="form-control" type="password" id="password" name="password">
                    </div>
                    <button class="btn btn-primary" type="submit">Connexion</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>