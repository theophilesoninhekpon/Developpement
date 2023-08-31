## MySQLi
(MySQL Improved) et PDO (PHP Data Objects) sont des extensions PHP qui permettent aux devs d'interagir
avec les bases de données relationnelles; telles que MySQL, SQLite, PostgreSQL...

`MySQLi` est spécifiquement conçu pour MySQL.
`PDO` est plus générique et prend en chaarge plusieurs types de bases de données

# Connexion avec PDO

Pour utiliser, il faut plus ou moins cinq étapes:

1. Créer une connexion à la BDD
```php
/*
 DSN: Data Source Name est une chaîne de caractères utilisée pour identifier et spécifier la BDD
 mysql:host=localhost;dbname=album_app_mvc;charset=utf8mb4
 port facultatif
 */
$dsn = "mysql:host=localhost;dbname=boom;charset=utf8mb4";
$username = "root";
$password = "";

$pdo = new PDO($dsn, $username, $password);
```
2. Exécuter une requête 
3. Récupérer les données
4. Fermer la connexion