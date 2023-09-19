# Instructions conditionnelles et opérateurs de comparaison

## Apprenez à utiliser les instructions conditionnelles en Java.

Les instructions conditionnelles contrôlent le flux d'exécution du code en fonction de la valeur de vérité des booleanexpressions données. Cet article couvrira les sujets suivants :

- Déclarations `if`
- Déclarations `else`
- Déclarations `if...else`
- Opérateurs de comparaison
- Opérateurs logiques

## Déclarations `if`

L'instruction "if" exécute un bloc de code lorsqu'une expression booléenne spécifiée est évaluée comme true.

```java
if (expression) {
  // Code to run if expression is true
}
```

## Déclarations `else`

L'instruction " else" exécute un bloc de code lorsque la condition à l'intérieur de l'instruction "if" est false. L'instruction "else" est toujours la dernière condition.

```java
if (expression) {
  // Code to run if expression is true
} else {
  // Code to run if expression is false
}
```

## Déclarations `if-else`

L'instruction `if-else` évalue une autre condition uniquement lorsque les instructions conditionnelles précédentes sont évaluées à false. Il peut y avoir plusieurs instructions if-else dans une seule instruction conditionnelle.

```java
if (expression) {
  // Code to run if expression is true
} else if (expression) {
  // Code to run if previous expression is false and current condition is true
} else if (expression) {
  // Code to run if previous expression is false and current condition is true
} else {
  // Code to run if all previous expressions are false
}
```

## Opérateurs de comparaison
Les opérateurs de comparaison évaluent la relation entre deux valeurs afin de déterminer l'expression comme `true` ou `false`.

### Moins que - `x < y`

### Plus grand que - `x > y`

### Inférieur ou égal à - `x <= y`

### Plus grand ou égal à - `x >= y`

### Égal à - `x == y`

### Pas égal à - `x != y`

## Opérateurs logiques
Les opérateurs logiques évaluent la valeur de vérité entre deux ou plusieurs expressions booléennes.

### ET - &&
L'opérateur  && ne retournera `true` que si les deux expressions booléennes ont une valeur true; sinon il renverra false:

```java
boolean statementA = true;
boolean statementB = false;
boolean statementC = true;

System.out.println(statementA && statementB); // Prints: false
System.out.println(statementA && statementC); // Prints: true
```
### OU - ||
L'opérateur  || retournera true si au moins une des expressions booléennes a une valeur true; sinon il renverra false:

```java
boolean statementA = true;
boolean statementB = false;
boolean statementC = false;

System.out.println(statementA || statementB); // Prints: true
System.out.println(statementB || statementC); // Prints: false
```

### PAS - !
L'opérateur ! renvoie la valeur opposée d'une expression booléenne :

```java
boolean statementA = true;
boolean statementB = false;
System.out.println(!statementA); // Prints: false
System.out.println(!statementB); // Prints: true
```
