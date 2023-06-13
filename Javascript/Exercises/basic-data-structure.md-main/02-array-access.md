# Accéder au contenu d'un tableau à l'aide de la notation entre parenthèses

La caractéristique fondamentale de toute structure de données est, bien sûr, la capacité non seulement de stocker des données, mais aussi de pouvoir récupérer ces données sur commande. Donc, maintenant que nous avons appris à créer un tableau, commençons à réfléchir à la manière dont nous pouvons accéder aux informations de ce tableau.

Lorsque nous définissons un tableau simple comme indiqué ci-dessous, il contient 3 éléments :

```js
let ourArray = ["a", "b", "c"];
```

Dans un tableau, chaque élément du tableau a un indice . Cet indice correspond également à la position de cet élément dans le tableau et à la manière dont vous le référencez. Cependant, il est important de noter que les tableaux JavaScript sont indexés à partir de **zéro** , ce qui signifie que le premier élément d'un tableau est en fait à la position zéro , pas à la position **un**. Afin de récupérer un élément d'un tableau, nous pouvons mettre un index entre crochets et l'ajouter à la fin d'un tableau, ou plus communément, à une variable qui fait référence à un objet tableau. C'est ce qu'on appelle la _notation parenthèses_ . Par exemple, si nous voulons récupérer `a` du tableau `ourArray` et l'affecter à une variable, nous pouvons le faire avec le code suivant :

```js
let ourVariable = ourArray[0];
```

A maintenant `ourVariable` a la valeur de `"a"`.

En plus d'accéder à la valeur associée à un indice, vous pouvez également définir un indice sur une valeur en utilisant la même notation :

```js
ourArray[1] = "not b anymore";
```
En utilisant la notation entre parenthèses, nous avons maintenant réinitialisé l'élément à l'index 1 de la chaîne b, à not b anymore. Maintenant `ourArray` est égale à `["a", "not b anymore", "c"]`.

Afin de relever ce défi, définissez la 2ème position (indice `1`) de `myArray` sur tout ce que vous voulez, en plus de la lettre `b`.
