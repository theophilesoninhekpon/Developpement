## Modèles, migrations et controllers

Pour permettre à l'utilisateur de poster des commentaires, on aura besoin d'un(e):
- modèle: qui nous fournit un moyen simple d'interagir avec la BDD  
- migration: qui nous permet de facilement créer et modifier les tables de notre BDD
- controller: reponsable de traiter les requêtes de renvoyer des réponses

## Middleware

C'est une fonctionnalité permettant de filtrer les requêtes HTTP effectuées dans l'application. 
Les middlewares sont des couches intermédiaires qui peuvent être ajoutées au pipeline de traitement 
des requêtes HTTP pour effectuer des tâches spécifiques avant que la requête n'atteigne la route appropriée ou après que la
réponse ait été générée par le contrôleur.

## Composants

### Composants sous forme de classes
Composants les plus versatiles et robustes. Peuvent prendre des paramètres

### Composants anonymes
composants simples ne prenant aucun paramètre

### Fonctions d'aide laravel

`route()`: fonction qui génère l'URL correspondant à une route nommée

`__()`: fonction qui renvoie la traduction pour une chaîne de caractère donnée

`action()`: fonction qui génère l'URL correspondant à l'action d'un controleur donné

`url()`: fonction qui génère l'URL complète (https://.../url)

`session()`: fonction qui récupère les données de session

`setLocale()`: fonction qui change la langue de l'application

`auth()->user()`: permet de récupérer l'utilisateur connecté 

## Mass assignation

La mass assignation est une technique qui permet de définir plusieurs attributs d'un modèle en une seule fois. Par exemple, imaginez que vous avez un modèle
'Utilisateur' avec des champs tels que `nom`, `email` et `rôle`. Elle permet de définir tous ces champs en une fois, ce qui peut être très pratique et vous 
faire gagner du temps. 
Cependant, si elle n'est pas gérée avec précaution, la mass assignation peut entraîner une vulnérabilité de sécurité appelée "over-posting" ou 
"vulnérabilité" de mass assignation.

## Les étapes de création d'une notification

1. Créer une notification (sms, email, slack...)
```php
php artisan make:notification nomdelanotification
```
2. Créer un évènement
3. Dispatcher un évènement
4. Créer un event listener