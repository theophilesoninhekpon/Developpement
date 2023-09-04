<?php 

try {
    $dsn = "mysql:host=localhost;port=3306;dbname=boom";
    $username = "root";
    $password = "";

    $pdo = new \PDO($dsn, $username);

    $uname = "johndoe";
    $upassword = "123";

    // requête à envoyer
    $sql = "SELECT * FROM `users`;";
    // lancer la requête
    $result = $pdo->query($sql);

    print_r($result);
    
} catch(\PDOException $error) {

    exit("Erreur de connexion: ". $error->getMessage());

}