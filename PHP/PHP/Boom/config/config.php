<?php

$host = "localhost";
$username = "root";
$userpassword = "";
$dbname = "boom";

$db = new PDO(
    'mysql:host=localhost;dbname=boom',
    $username,
    $userpassword
);