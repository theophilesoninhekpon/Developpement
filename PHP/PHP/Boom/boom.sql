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