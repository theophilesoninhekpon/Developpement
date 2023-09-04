<?php

$host = "localhost";
$username = "root";
$userpassword = "";
$dbname = "boom";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

$db = new PDO(
    'mysql:host=localhost;dbname=boom',
    $username,
    $userpassword,
    $options
);