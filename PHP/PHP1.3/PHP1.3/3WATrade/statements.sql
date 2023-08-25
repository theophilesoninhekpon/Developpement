
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

    -- Le nombre total d'utilisateurs ;

    SELECT COUNT(id) 
    FROM users;

    -- La liste de tous les utilisateurs associés à leurs villes respectives ;
    
    SELECT users.*, addresses.city 
    FROM users
    INNER JOIN addresses 
    ON addresses.user_id = users.id;

    -- La liste de tous les utilisateurs vivant à une adresse sans numéro ;

  
    SELECT users.*
    FROM users
    INNER JOIN addresses
    ON addresses.user_id = users.id
    WHERE addresses.number IS NULL;

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


