<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/Boom/app/models/AlbumModel.php');

class AlbumController {
    public function home() {
        $albums = AlbumModel::getAllAlbums();
        require($_SERVER['DOCUMENT_ROOT'].'/Boom/app/views/home.php');
    }

    public function editAlbum($id) {
        $album = AlbumModel::getAlbumById($id);
        require($_SERVER['DOCUMENT_ROOT'].'/Boom/app/views/editAlbum.php');
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