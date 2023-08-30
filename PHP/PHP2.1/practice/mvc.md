## MVC - Model View Controller

Le Modèle-Vue-Controleur est un modèle de conception (design pattern) couramment utilisé dans le développement
web pour aider à organiser le code et séparer différentes composantes d'une application. Il favorise l'idée de 
diviser une application en trois composants principaux: le modèle, la vue et le controleur. Chaque composant a
un rôle et des responsabilités spécifiques, ce qui rend la base de code plus organisée, plus facile à entretenir et lus évolutive

Voici une explication de chaque composant: 

1. Modèle
Le modèle représente les données et la logique de notre application. Il est responsable de la gestion des données telles que la 
récupération des  données depuis une BDD, l'éxécution de calculs et l'application des règles métiers 

2. Vue
Elle est responsable de l'affichage des données à l'utilisateur. C'est ce que l'utilisateur voit et avec quoi il interagit.Elle prend les 
données du modèle et les présente sous une forme conviviale pour lrutilisateur, généralement sous forme de HTML, CSS et parfois JS. les vues
sont principalement concernés par la présentation et ne contiennent généralement pas de logique complexe (pas assez de php);

3. Contrôleur
IL agit comme un intermédiaire entre le modèle et la vue. Il reçoit les entrées de l'utilisateur depuis la vue, les traite, interagit avec le modèle
pour récupérer ou mettre à jour les données puis décide quelle vue présenter à l'utilisateur. IL contrôle la logique de l'application et contrôle le flux de données entre le modèle et
la vue.