<?php

class AlbumModel {
    
    // Méthode pour se connecter à la BDD
    private static function getConnection() {
        // Variables globales: global permet à la fonction d'avoir accès aux variables globalement
        global 
        $db_host, 
        $db_port, 
        $db_username, 
        $db_userpassword, 
        $db_name;

        try {

            // paramètre de connexion
            $options = [
                    // nous avertir de toutes les erreurs de connexion
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    // renvoyer les données sous forme de tableau associatif
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ];

            $dsn = "mysql:host=$db_host;dbname=$db_name;port=$db_port;charset=utf8mb4";

            $pdo = new \PDO($dsn, $db_username, $db_userpassword, $options);

            return $pdo;

        } catch (\PDOException $e) {
            //throw $e;
            echo "Erreur: " . $e->getMessage();
            
            return null;
            
        }
    }
    
    // Méthode pour récupérer tous les albums (read)
    public static function getAlbums() {
        $pdo = self::getConnection();

        if($pdo !== null) {
            try {
                $sql = "SELECT * FROM albums";
                // prepared statement (requête préparée)
                $statement = $pdo->prepare($sql);
                $statement->execute();
                $albums = $statement->fetchAll();
                return $albums;

            } catch (PDOException $e) {
                echo "Erreur: ".$e->getMessage();
                return 0;
            }
        }
    }

    // Méthode pour récupérer un album (read)
    public static function getAlbumById(int $id) {
        $pdo = self::getConnection();

        if($pdo !== null) {
            try {
                $sql = "SELECT * FROM albums WHERE id = ?";
                // prepared statement (requête préparée)
                $statement = $pdo->prepare($sql);
                $statement->execute([$id]);
                $album = $statement->fetch();
                return $album;
                
            } catch (PDOException $e) {
                echo "Erreur: ".$e->getMessage();
                return 0;
            }
        }
    }
    
    // Méthode pour créer les albums (create)
    public static function addAlbum(string $title, string $artist) {
        $pdo = self::getConnection();

        if($pdo !== null) {
            try {
                $sql = "INSERT INTO albums(title, artist) VALUES(?,?)";
                // prepared statement (requête préparée)
                $statement = $pdo->prepare($sql);
                echo "<pre>";
                $statement->execute([$title, $artist]);
                $albums = $statement->fetchAll();
                print_r($albums);
                echo "</pre>";
                return $albums;

                /* ou $results = $pdo->query($sql)->fetchAll();
                préparer sans paramètres, 
                exécuter puis renvoyer les résultats (avec fetchAll)
                query() = prepare() + execute() sans paramètres
                **/

            } catch (PDOException $e) {
                echo "Erreur: ".$e->getMessage();
                return 0;
            }
        }
    }


    // Méthode pour màj un album (update)
    public static function updateAlbum(int $id, string $title, string $artist) {
        $pdo = self::getConnection();

        if($pdo !== null) {
            try {
                $sql = "UPDATE albums SET title = ?, artist = ? WHERE id = ?;";
                // prepared statement (requête préparée)
                $statement = $pdo->prepare($sql);
                $statement->execute([$title, $artist, $id]);
                return 1;
                
            } catch (PDOException $e) {
                echo "Erreur: ".$e->getMessage();
                return 0;
            }
        }
    }

    // Méthode pour supprimer un album (delete)
    public static function deleteAlbum(int $id) {
        $pdo = self::getConnection();

        if($pdo !== null) {
            try {
                $sql = "DELETE FROM albums WHERE id = ?;";
                // prepared statement (requête préparée)
                $statement = $pdo->prepare($sql);
                $statement->execute([$id]);
                return 1;
                
            } catch (PDOException $e) {
                echo "Erreur: ".$e->getMessage();
                return 0;
            }
        }
    }
}