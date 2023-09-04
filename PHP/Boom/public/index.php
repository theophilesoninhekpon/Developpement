<?php

require('../config/config.php');
define("DB", $db);
require('../app/controllers/AlbumController.php');

$controller = new AlbumController();
$controller->home();

$controller->addAlbum('World Zero', 'Eminem');