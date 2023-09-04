try {
    $dsn = "mysql:host=localhost;port=3306;dbname=boom";
    $username = "root";
    $password = "";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ];

    $pdo = new PDO($dsn, $username, $password, $options);
    echo "Connectée avec succès";

    // Nous informer quand il y a une erreur
    // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Nous renvoyer toutes les données sous forme de tableau associatif
    // $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    
    $uname = "johndoe";
    $upassword = "123";

    // requête à envoyer
    $sql = "SELECT * FROM `users`;";
    // lancer la requête
    echo "<br>";

    // FETCH_DEFAULT
    // FETCH_ASSOC : renvoie les résultats de recherche sous forme de tableau associatif avec les noms de colonne(champ) comme clé
    foreach($pdo->query($sql, PDO::FETCH_ASSOC) as $user) {
        echo "<pre>";
        print_r($user);
        echo "</pre>";

        /**
         * $user.user_name objet FETCH_OBJ
         * $user->user_name tableau associatif FETCH_ASSOC
         */
    }

    /** 
     * Marqueurs de substitution
     * Marqueurs nommés
     */

    $sql2 = "INSERT INTO `users`(`user_name`, `user_password`) 
    VALUES (?,?)";

    // préparer la requête pour assurer la sécurité
    $statement = $pdo->prepare($sql2);
    // exécution de la requête préparée
    $userAdded = $statement->execute([$uname, $upassword]);

    if($userAdded) {
        print_r($userAdded);
        echo "<br>";
        echo "success";
    } else {
        echo "Echec d'ajout";
    }


} catch(PDOException $error) {

    exit("Erreur de connexion: ". $error->getMessage());

}