# Découvrez les variables et les différents types de données trouvés en Java.

Les variables sont utilisées pour nommer, stocker et référencer différents types de données. Cet article couvrira les sujets suivants :

- Déclaration d'une variable
- Types de données
- Opérateurs
- Les string

## Déclaration d'une variable

Pour déclarer une variable avec une valeur, utilisez la syntaxe suivante :

```java
dataType variableName = value;
```

Pour déclarer une variable sans valeur, utilisez plutôt cette syntaxe :

```java
dataType variableName;
```

Pour attribuer ou modifier une valeur de variable, indiquez le nom de la variable suivi de l'opérateur d'affectation ( =) et de la nouvelle valeur :

```java
variableName = newValue;
```

## Types de données

En Java, il existe plusieurs types de données primitifs ou intégrés :

### int
ils stockent les valeurs entières comprises entre **-2147483648** et **2147483647**.

```java
int moonLanding = 1969;
```

### double
ils stockent les valeurs numériques décimales entre **4.9E-324** et **1.7976931348623157E+308** :

```java
double PI = 3.14;
```

### boolean
stockent les valeurs true ou false :

```java
boolean isRaining = true;
boolean isSunny = false;
```

### char
ils stockent des valeurs de caractères uniques :

```java
char firstLetter = 'a';
```

## Opérateurs

### Opérateurs arithmétiques
Les opérateurs arithmétiques peuvent être utilisés pour modifier la valeur d'une variable basée sur un nombre. Ces opérateurs peuvent être utilisés pour l'addition ( +), la soustraction ( -), la multiplication ( *), la division ( /) et l'obtention du reste ( %) :

```java
int num = 3 + 2; // num now equals 5
num = num - 1; // num now equals 4
num = 4 * 4; // num now equals 16
num = num / 2; // num now equals 8
num = num % 5; // num now equals 3
```

### Opérateurs d'affectation composés

Les opérateurs d'affectation composée effectuent une opération arithmétique sur une variable, puis réaffectent sa valeur en une seule étape. L'opérateur d'affectation composé est composé d'un opérateur arithmétique immédiatement suivi de l'opérateur d'affectation :

```java
int num = 3;
num += 2; // num now equals 5
num -= 1; // num now equals 4
num *= 4; // num now equals 16
num /= 2; // num now equals 8
num %= 5; // num now equals 3
```

### Opérateurs d'incrémentation et de décrémentation

L'opérateur d'incrémentation ++augmente une valeur numérique de 1tandis que l'opérateur de décrémentation diminue une valeur numérique de1 :

```java
// Increment:
int age = 47;
age++; // age now equals 48
// Decrement:
int apples = 7;
apples--; // apples now equals 6
```

- String
Un autre type de données courant en Java est le String. Strings sont un type de données de référence car ce sont des objets de la Stringclasse. Strings contiennent des séquences de caractères contenues entre guillemets doubles ( ").

```java
// Option 1 for declaring a String
String greetings = "Greetings, earthlings!";
// Option 2 for declaring a String
String request = new String("Take me to your leader.");
```
