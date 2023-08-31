<?php 

try {
    $dsn = "mysql:host=localhost;port=3306;dbname=boom";
    $username = "root";
    $password = "";

    $pdo = new PDO($dsn, $username);
   

} catch(PDOException $error) {

    exit("Erreur de connexion: ". $error->getMessage());

}