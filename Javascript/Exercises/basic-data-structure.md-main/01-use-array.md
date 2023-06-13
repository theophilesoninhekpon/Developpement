# Utiliser un tableau pour stocker une collection de données
Voici un exemple de la mise en œuvre la plus simple d'une structure de données de tableau. C'est ce qu'on appelle un tableau unidimensionnel , ce qui signifie qu'il n'a qu'un seul niveau ou qu'il ne contient aucun autre tableau imbriqué. Notez qu'il contient des booléens , des chaînes et des nombres , parmi d'autres types de données JavaScript valides :

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```
La commande `console.log` affiche `7`.

Tous les tableaux ont une propriété de longueur qui, comme indiqué ci-dessus, est très facilement accessible avec la syntaxe `Array.length`. Une implémentation plus complexe d'un tableau peut être vue ci-dessous. C'est ce qu'on appelle un tableau multidimensionnel ou un tableau qui contient d'autres tableaux. Notez que ce tableau contient également des objets JavaScript , que nous examinerons de très près dans notre prochaine section, mais pour l'instant, tout ce que vous devez savoir, c'est que les tableaux sont également capables de stocker des objets complexes.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

```
Nous avons défini une variable appelée `yourArray`. Complétez l'instruction en affectant un tableau d'au moins 5 éléments à la variable `yourArray`. Votre tableau doit contenir au moins une chaîne , un nombre et un booléen .

```js
let yourArray = ["string", 5, true, 5.5, null]; // Changez cette ligne
```
