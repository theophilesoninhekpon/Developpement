<?php

require APP_ROOT.'/app/models/AlbumModel.php';

class AlbumController {

    public function index() {
        $albums = AlbumModel::getAlbums();
        require(APP_ROOT.'/app/views/home.phtml');
        if($albums) {
            return 1;
        } else {
            return 0;
        }
        // affiche la liste tous les albums
    }

    public function create() {
        // affiche le formulaire de création d'album
        require APP_ROOT . '/app/views/addAlbum.phtml';
    }

    public function store($title, $artist) {
        // Enregistrer un nouvel album dans la BDD
        $queryState = AlbumModel::addAlbum($title, $artist);
        if($queryState) {
            return 1;
        } else {
            return 0;
        }
    }

    public function show($id) {
        // Afficher les détails d'un albums spécifique
        $album = AlbumModel::getAlbumById($id);
        require APP_ROOT . '/app/views/album-details.phtml';
    }
    
    public function edit($id) {
        
        $album = AlbumModel::getAlbumById($id);
        // Afficher le formulaire d'édition d'un album
        require APP_ROOT . '/app/views/editAlbum.phtml';
        if($album) {
            return 1;
        } else {
            return 0;
        }
        
    }

    public function update($id, $title, $artist) {
        // Mettre à jour un album existant dans la BDD
        $queryState = AlbumModel::updateAlbum($id, $title, $artist);
        if($queryState) {
            return 1;
        } else {
            return 0;
        }
    }

    public function destroy($id) {
        // Supprimer un album de la BDD
        $queryState = AlbumModel::deleteAlbum($id);
        if($queryState) {
            return 1;
        } else {
            return 0;
        }
    }
}