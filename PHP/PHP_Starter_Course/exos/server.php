<?php

 // L'utilisateur a uploadé un fichier
    if(isset($_POST['submit']) && isset($_FILES['photo_profile'])){

        //  Récupérer les informations du fichier (nom, extension, chemin)

    $fileName = $_FILES['photo_profile']['name'];
    $tmpDir = $_FILES['photo_profile']['tmp_name'];

    $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    
    // echo "fileName: " .$fileName;
    // echo '<br>';
    // echo "tmpDir: " .$tmpDir;

    /**
     * Fonction qui sauvegarde le fichier à l'endroit désiré 
     * 
     */
    move_uploaded_file($tmpDir, "C:/_programmes/laragon-6.0.0/upload/img-upload-" . time() . '.' .$fileExtension);

        //   Sauvegarder le fichier sur le serveur

    } else {
        echo "pas de fichier uploadé";
        
        // rediriger ce dernier sur la page du formulaire
        // header('Location: /index.php');
    }

?>