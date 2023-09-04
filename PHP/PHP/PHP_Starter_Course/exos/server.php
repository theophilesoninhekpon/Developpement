<?php

    require('./generic_functions.php');
    
    // Définis une constante
    define("MAX_SIZE", 3000000);
    
    // L'utilisateur a uploadé un fichier
    if(isset($_POST['submit']) && !empty($_FILES['photo_profile'])){

    echo "ici";
        //  Récupérer les informations du fichier (nom, extension, chemin)

    $fileName = $_FILES['photo_profile']['name'];
    $tmpDir = $_FILES['photo_profile']['tmp_name'];
    $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    dd($_FILES);
    // N'accepter que les fichiers jpeg, png, jpg
    $allowedFiles = ["jpg", "png", "jpg"];

    if(in_array($fileExtension, $allowedFiles)) {

        // vérifier qu'il n'y a pas d'erreurs
        if(!$_FILES["photo_profile"]["error"]) {
            // il n'y a pas d'erreur
            // vérifier si le fichier n'excède pas la taille maximale

            if($_FILES["photo_profile"]["size"] <= MAX_SIZE) {
                echo "fichier < " . MAX_SIZE . "octets";
                move_uploaded_file($tmpDir, "./upload/img-upload-" . uniqid() . '.' .$fileExtension);
            } else {
                // la taille est trop élevée
                echo "Fichier trop volumineux";
            }
        } else {
            echo "Erreur lors du chargement du fichier. Veuillez réessayer svp !";
        }

        echo "<br>";
        echo "bon fichier";
    } else {
        echo "Fichiers $fileExtension non autorisés !";
        echo "<br>";
        echo "Formats autorisés: " . implode(", ", $allowedFiles);
    }

    // dd(pathinfo($tmpDir));

    // echo "fileName: " .$fileName;
    // echo '<br>';
    // echo "tmpDir: " .$tmpDir;
    exit; // die, die(), exit()

    /**
     * Fonction qui sauvegarde le fichier à l'endroit désiré 
     * 
     */
    

        //   Sauvegarder le fichier sur le serveur

    } else {
        // echo "pas de fichier uploadé";
        
        // rediriger ce dernier sur la page du formulaire
        header('Location: /index.php');
    }
