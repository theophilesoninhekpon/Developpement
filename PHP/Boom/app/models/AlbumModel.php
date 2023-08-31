<?php

class AlbumModel {

    // Méthode pour récupérer tous les albums
    public static function getAllAlbums() {
        // Code pour récupérer tous les albums depuis la base de données
        $result = DB->query('SELECT * FROM album');
        return $result->fetchAll();

    }

    // Méthode pour ajouter un nouvel album
    public static function addAlbum($title, $artist) {
        // Code pour ajouter un album à la base de données
        $sql = 'INSERT INTO (title, artist )album VALUES(?,?)';
        $query = DB->prepare($sql);
        $query->execute([$title, $artist]);

    }

    // Méthode pour récupérer un album par son ID
    public static function getAlbumById($id) {
        // Code pour récupérer un album depuis la base de données par son ID
        $sql = 'SELECT title, artist FROM album WHERE id = ?';
        $query = DB->prepare($sql);
        return $query->execute([$id]);
    }

    // Méthode pour mettre à jour un album
    public static function updateAlbum($id, $title, $artist) {
        // Code pour mettre à jour un album dans la base de données
        $sql = 'UPDATE album SET title = ?, artist = ? WHERE id = ?';
        $query = DB->prepare($sql);
        $query->execute([$title, $artist, $id]);
    }

    // Méthode pour supprimer un album par son ID
    public static function deleteAlbum($id) {
        // Code pour supprimer un album de la base de données
        $sql = 'DELETE FROM album WHERE id = ?';
        $query = DB->prepare($sql);
        $query->execute([$id]);
    }
}