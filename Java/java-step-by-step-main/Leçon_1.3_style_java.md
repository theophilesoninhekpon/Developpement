# Guide du style Java

Bien que certains langages de programmation partagent des caractéristiques de style, il est toujours important de suivre les conventions de formatage de chaque langue. Nous vous donnerons un aperçu des sujets les plus courants.

## Conventions de nommage

En règle générale, Java utilise le `camelCase` pour la plupart des noms, y compris les variables et les méthodes. Cependant, il y a quelques variations en fonction de ce que vous nommez.

Les noms de classe et d'interface utilisent le `PascalCase`.

Les constantes n'utilisent pas le camelCase et utilisent plutôt le `snake_case` avec tous les caractères en majuscules. Par exemple, si vous vouliez stocker la constante pi, vous pourriez la nommer VALUE_OF_PI.

## Accolades et parenthèses

Les accolades et les parenthèses doivent être utilisées pour toutes les déclarations de méthode et de classe, ainsi que pour les conditions et les boucles contenant plusieurs lignes de code.

Bien que vous puissiez omettre les accolades pour les conditions et les boucles à ligne unique, c'est la meilleure pratique pour les utiliser pour la lisibilité. Par exemple,
```java
if (true) {
  return false;
}
```

est beaucoup plus lisible que

```java
if true
  return false;
```

Dans le même ordre d'idées, les parenthèses devraient être utilisés pour les arguments de la boucle conditionnelle, comme on le voit dans l'exemple ci-dessus.

## Indentations et espacement

Bien que la quantité d'espaces blancs n'affecte pas la compilation et le fonctionnement du code en Java, il existe des normes qui aident à la lisibilité.

Toutes les indentations doivent être de deux espaces, et il devrait y avoir une indentation chaque fois qu'un nouveau bloc (boucle, méthode, etc.) est ouvert, comme on le voit dans les exemples ci-dessus.

Il devrait y avoir des espaces avant et après les mots-clés et les opérateurs. Par exemple, tandis que

```java
x=3;
```

est valide, placer un espace de chaque côté de l'opérateur maintient le code clair et lisible:

```java
x = 3;
```
