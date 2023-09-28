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