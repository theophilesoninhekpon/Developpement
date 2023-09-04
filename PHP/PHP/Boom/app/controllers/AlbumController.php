<?php

require_once('../models/AlbumModel.php');

class AlbumController {
    public function home() {
        require('../views/home.php');
        return $albums = AlbumModel::getAllAlbums();
    }

    public function editAlbum($id) {
        require('../views/editAlbum.php');
        return $album = AlbumModel::getAlbumById($id);
    }

    public function updateAlbum($id, $title, $artist) {
        AlbumModel::updateAlbum($id, $title, $artist);
        header('Location: index.php');
    }

    public function deleteAlbum($id) {
        AlbumModel::deleteAlbum($id);
        header('Location: index.php');
    }

    public function addAlbum($title, $artist) {
        AlbumModel::addAlbum($title, $artist);
        header('Location: index.php');
    }
}