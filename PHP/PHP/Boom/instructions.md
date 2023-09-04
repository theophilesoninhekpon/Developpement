## Album App en MVC (PHP)

Le but de cette application est de réussir à faire un CRUD en PHP. Vous utiliserez le module PDO que vous avez vu au cours. Suivez les étapes suivantes.

## Étape 1 : Configuration de la base de données

1. Créez une base de données MySQL.
2. Dans le dossier "config", créez un fichier `config.php` et configurez les paramètres de connexion à la base de données.

## Étape 2 : Modèle (models/AlbumModel.php)

1. Dans le dossier "models", créez un fichier `AlbumModel.php`.
2. Créez une classe `AlbumModel` avec des méthodes pour ajouter, récupérer, mettre à jour et supprimer des albums en utilisant les requêtes SQL.
3. Implémentez les méthodes pour interagir avec la base de données.

## Étape 3 : Contrôleur (controllers/AlbumController.php)

1. Dans le dossier "controllers", créez un fichier `AlbumController.php`.
2. Requirez le modèle `AlbumModel` dans le contrôleur.
3. Créez une classe `AlbumController` avec des méthodes pour chaque action : afficher la liste des albums, ajouter, éditer et supprimer un album.
4. Dans chaque méthode, appelez les méthodes appropriées du modèle et dirigez vers les vues.

## Étape 4 : Vues (views)

1. Dans le dossier "views", créez des fichiers `.php` pour chaque vue :
   - `home.php` : Affiche la liste des albums avec des liens pour éditer et supprimer.
   - `editAlbum.php` : Formulaire pour éditer un album.
   - `addAlbum.php` : Formulaire pour ajouter un album.
2. Utilisez des formulaires HTML pour saisir et afficher les données d'album.
3. Utilisez des liens pour rediriger vers les vues d'édition et de suppression.

## Étape 5 : Point d'entrée (public/index.php)

1. Dans le dossier "public", créez un fichier `index.php`.
2. Requirez le fichier de configuration et le contrôleur `AlbumController`.
3. Instanciez le contrôleur et appelez la méthode d'affichage de la liste d'albums.

## Étape 6 : Tester l'application

1. Lancez votre serveur local (par exemple, Apache avec PHP).
2. Accédez à l'application en naviguant vers `http://localhost/chemin_vers_votre_projet/public`.

Félicitations, vous avez créé une application CRUD d'albums en utilisant l'architecture MVC et PHP ! N'hésitez pas à personnaliser les vues et à améliorer l'application selon vos besoins.
