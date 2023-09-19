# Code challenge : utiliser des boucles avec des chaînes

## Mettez vos connaissances à l'épreuve avec ces défis de code.

### Parcourir de chaînes

Les String sont des objets qui contiennent des informations textuelles. Saviez-vous que nous pouvons également parcourir une chaîne de caractère en utilisant une boucle ? C'est vrai, comme pour les tableaux et les ArrayList  , nous pouvons parcourir une chaîne afin d'accéder à chaque élément individuel.

Cette capacité à traverser un String peut être extrêmement utile. Par exemple, une tentative a été faite pour copier et envoyer le poème complet de « Le Laboureur est ses Enfant » de **Jean de La Fontaine**

 ; cependant, il a été rapporté que deux des strophes apparaissaient comme ceci :

```
.rosért nu tse liavart el euQ
trom as tnava rertnom ruel eD
egas tuf erèp el siaM .éhcac ed tniop ,tnegra’D
.egatnavad atroppar ne lI
na’l ed tuob ua’uq neib is ; tuotrap ,àled ,àçeD
pmahc el tnenruoter suov slif sel ,trom erèp eL
.essaper te essap en niam al ùO
ecalp ellun zessial en ; zehcêb ,relliuof ,zesuerC
.tûO’l tiaf arua no’uq sèd pmahc ertov zeumeR
.tuob à zerdneiv ne suov ,revuort aref el suoV
egaruoc ed uep nu siam ; tiordne’l sap sias en eJ
.snaded éhcac tse rosért nU
.stnerap son éssial tno suon euQ
egatiréh’l erdnev ed ,li-tid ruel ,suov-zedraG
.sniomét snas alrap ruel ,stnafne ses rinev tiF
,eniahcorp trom as tnatnes ,rueruobaL ehcir nU
.sniom el euqnam iuq sdnof el tse’C
: eniep al ed zenerp ,zelliavarT
```

Nous avons été chargés de résoudre le problème à l'aide du parcours de chaînes. Commençons!

Créez une nouvelle chaîne avec les caractères inversés
Le premier problème connu est que le texte du poème s’est inversé. Nous utiliserons un algorithme pour inverser tous les caractères. Nous devrons suivre les étapes suivantes :

- Déclarez un nouveau String vide pour stocker le texte inversé.
  
- Créez une boucle for qui parcourra chaque valeur de notre String.
  
- À l’intérieur de la boucle, récupérez un seul élément à l’index de l’itération en cours.

- Également dans la boucle, mettez à jour le nouveau String en ajoutant la valeur de l'élément actuel.

- Retournez le nouveau String une fois la boucle terminée.
