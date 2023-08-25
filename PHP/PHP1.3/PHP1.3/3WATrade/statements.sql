
    -- La liste de tous les utilisateurs ;

    SELECT * 
    FROM users;

    -- La liste de tous les utilisateurs rangée par noms de famille ;

    SELECT * 
    FROM users 
    ORDER BY last_name;

    -- Le dernier utilisateur inscrit ;

    SELECT *
    FROM users 
    ORDER BY registration_date DESC LIMIT 1;

    -- La liste de tous les utilisateurs fêtant leur anniversaire ce mois-ci ;

    SELECT * 
    FROM users 
    WHERE birthdate
    BETWEEN "2023-08-01 00:00:00" 
    AND "2023-08-31 23:59:59"

    SELECT *
    FROM users
    LIKE '%-08-%'

    SELECT *
    FROM users
    WHERE MONTH(birthdate) = MONTH(CURDATE())

    SELECT * 
    FROM users
    WHERE MONTH(birthdate) = MONTH(NOW())

    -- Le nombre total d'utilisateurs ;

    SELECT COUNT(id) 
    FROM users;

    -- La liste de tous les utilisateurs associés à leurs villes respectives ;
    
    SELECT users.*, addresses.city 
    FROM users
    INNER JOIN addresses 
    ON addresses.user_id = users.id;

    SELECT users.*, addresses.city
    FROM users, addresses
    WHERE addresses.id = users.addresses_id

    -- La liste de tous les utilisateurs vivant à une adresse sans numéro ;

    SELECT users.*
    FROM users
    INNER JOIN addresses
    ON addresses.user_id = users.id
    WHERE addresses.number IS NULL;

    SELECT users.*
    FROM users, addresses
    WHERE addresses.user_id = users.id AND addresses.number IS NULL

    -- La liste de tous les produits dont le prix est supérieur à 1 000 € ;

    SELECT * 
    FROM products
    WHERE price > 1000

    -- La liste de tous les produits associés à leurs photos respectives ;

    SELECT products.*, pictures.url, pictures.caption
    FROM products
    INNER JOIN pictures
    ON pictures.product_id = products.id;

    -- La liste de tous les produits appartenant à la catégorie « Voyage » ;

    SELECT p.name, p.description, p.price
    FROM ((products_categories AS pc
    INNER JOIN products AS p
    ON pc.product_id = p.id)
    INNER JOIN categories AS c 
    ON pc.category_id = c.id)
    WHERE c.title = "Voyage"
    
    -- La liste de tous les utilisateurs ayant effectué plus de dix commandes ;

    SELECT users.id, COUNT(orders.user_id)
    FROM users
    INNER JOIN orders
    ON orders.user_id = users.id
    GROUP BY users.id
    HAVING COUNT(orders.user_id) > 10;

    -- La liste de tous les produits achetés par le premier utilisateur inscrit.

   SELECT p.name, p.description, p.price
    FROM ((products_orders AS po
    INNER JOIN products AS p
    ON po.product_id = p.id)
    INNER JOIN orders AS o 
    ON po.order_id = o.id)
    WHERE o.user_id =
    (SELECT users.id 
    FROM users
    ORDER BY users.registration_date LIMIT 1)


    -- Création de la base de données app_music
    create database 
    app_music
    CHARACTER set utf8mb4
    collate utf8mb4_unicode_ci; -- encodage | ci: case insensitive

    USE app_music; -- Cette base de données sera utilisée pour toutes les requêtes

    CREATE TABLE -- le nom d'une table est suivi de s 
    albums (
            id INT(11) PRIMARY KEY AUTO_INCREMENT,
            ref CHAR(10) NOT NULL,
            name VARCHAR(50) NOT NULL,
            title VARCHAR(50) NOT NULL,
            description TEXT,  
            likes ENUM('Coll', 'Much', 'Great')
        
    );  -- Définition des champs de cette table

    -- Insertion de données

    INSERT INTO `albums` (`ref`, `name`, `title`, `description`, `likes`) 
    VALUES ('XY-123','Elton John','Sacrifice',"L'album chaud du moment",'Cool');

    INSERT INTO `albums` (`id`, `ref`, `name`, `title`, `description`, `likes`) 
    VALUES (NULL, 'XY-123','Elton John','Sacrifice',"L'album chaud du moment",'Cool');

    CREATE TABLE test (
        id INT(11) NOT NULL AUTO_INCREMENT,
        a INT(11) NOT NULL,
        b INT(11) UNSIGNED ZEROFILL NOT NULL,
        c INT(5) DEFAULT NULL,
        d INT(5) UNSIGNED ZEROFILL NOT NULL,
        e INT(15) DEFAULT NULL,
        PRIMARY KEY (`id`)
    );

    INSERT INTO `test`(`id`, `a`, `b`, `c`, `d`, `e`) 
    VALUES (NULL,1,1,1,1,1)

    CREATE TABLE albumList (
        id INT AUTO_INCREMENT,
        album_id INT,
        list VARCHAR(100),
        PRIMARY KEY (`id`),
        CONSTRAINT FK_albums_albumList FOREIGN KEY(`album_id`) REFERENCES albums(`id`)
    );