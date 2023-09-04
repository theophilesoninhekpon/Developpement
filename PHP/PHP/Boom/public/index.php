<?php

echo $_SERVER['DOCUMENT_ROOT'];
require('../config/config.php');
require('../app/controllers/AlbumController.php');

define("DB", $db);

$controller = new AlbumController();
$albums = $controller->home();