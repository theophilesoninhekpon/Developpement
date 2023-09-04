DROP DATABASE IF EXISTS `boom` ;

CREATE DATABASE `boom`;

USE `boom`;

CREATE TABLE `album` (

    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL ,
    `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
    `ref` VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `author` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `duration` int(11) NOT NULL,
    `likes` int(11) DEFAULT NULL,
    `release_date` date COLLATE utf8mb4_unicode_ci NOT NULL ,
    PRIMARY KEY (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertion de quelques albums dans la base de données

-- ou

CREATE DATABASE album_app_mvc
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci

-- Création de la table albums

USE album_app_mvc;

CREATE TABLE albums (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    artist VARCHAR(50) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )