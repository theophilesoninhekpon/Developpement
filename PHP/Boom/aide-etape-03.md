## Contrôleur

Suivez le format suivant:

```php
<?php
require_once('../models/AlbumModel.php');

class AlbumController {
    public function home() {
        $albums = AlbumModel::getAllAlbums();
        require('../views/home.php');
    }

    public function editAlbum($id) {
        $album = AlbumModel::getAlbumById($id);
        require('../views/editAlbum.php');
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
```
