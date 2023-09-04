# Usine de robots
Qui n'a jamais rêvé de se fabriquer un robot pour exterminer l'humanité faire le café ?

Dans un fichier index.php, qui contiendra tout en haut votre logique PHP, puis le document HTML à proprement parler, vous allez développer un programme capable de créer un nouveau robot à chaque rafraîchissement de la page. Le robot saluera alors l'utilisateur et se présentera. Exemple :

« Salut, humain. Je suis VX-2345. »

Le nom du robot est généré aléatoirement au chargement de la page. Il se constituera toujours de deux lettres majuscules, d'un tiret et de quatre nombres.

## Bonus 1
Après s'être présenté, le robot annoncera la date et l'heure actuelles au format suivant :

« Nous sommes le 30 07 2020, il est 11:59:30. »

## Bonus 2
Après avoir annoncé la date et l'heure, le robot choisira un nombre aléatoire compris entre 1 et 10, et vous dira si c'est un nombre pair ou impair. Exemple :

« J'ai choisi le nombre 3. C'est un nombre impair. »

## Bonus 3
Notre robot découvre le sens de l'humour. Il lui prendra alors l'idée de dire son nom à l'envers. Un robot du nom de VX-2345 dira alors :

« Mon nom à l'envers s'écrit 5432-XV. Ah. Ah. Ah. »

## Bonus 4
Oups ! Il s'avère que notre robot a une chance sur trois de devenir un robot tueur diabolique.

Deux fois sur trois, le robot dira « Vous voulez un café ? »

Une fois sur trois, le robot dira « Extermination ! Extermination ! »

## Bonus 5
Si ce n'est encore pas fait à ce stade, vous allez repenser votre code pour faire de votre robot un objet.

Vous aurez une classe Robot dont vous créerez une instance au chargement de la page. Toutes les caractéristiques et actions de notre robot deviendront alors des propriétés et des méthodes.