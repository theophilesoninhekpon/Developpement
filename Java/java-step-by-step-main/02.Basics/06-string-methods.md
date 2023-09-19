# Méthodes de chaîne
## Un aperçu des méthodes Java String les plus courantes.

La classe Java `String` dispose de nombreuses méthodes utiles pour nous aider à effectuer des opérations et des manipulations de données sur celles-ci. Nous n'avons besoin de rien importer pour utiliser la classe `String` car elle fait partie du `java.langpackage`, qui est disponible par défaut.

Dans cet article, nous passerons en revue les Stringméthodes suivantes :

- .length()
- .concat()
- .equals()
- .indexOf()
- .charAt()
- .substring()
- .toUpperCase()/.toLowerCase()

## .length()
La méthode `.length()` renvoie la longueur, ou le nombre total de caractères, de la chaîne de caractères sur laquelle elle est appelée :

```java
String str1 = "Hello World!";
String str2 = "Hi!";
String str3 = "";

System.out.println(str1.length()); // Prints: 12
System.out.println(str2.length()); // Prints: 3
System.out.println(str3.length()); // Prints: 0
```
Notez que les espaces et la ponctuation sont inclus dans le décompte.

## .concat()
La méthode `.concat()` concatène un String à la fin d'un autre String. La concaténation est l'opération qui consiste à joindre deux chaînes ensemble :

```java
String name = "Code";
name = name.concat("cademy");
System.out.println(name); // Prints: Codecademy
```

Les String sont des objets immuables, ce qui signifie que les méthodes telles que `.concat()` ne modifient pas réellement un String. Si nous utilisons `.concat()` sur une variable `name` sans réaffecter sa valeur, cela ne changera pas :

```java
String name = "Code";
name.concat("cademy");
System.out.println(name); // Prints: Code
```

## .equals()
Avec des objets comme les `String`, nous ne pouvons pas utiliser l'opérateur d'égalité primitif `==` pour vérifier l'égalité. Au lieu de cela, nous utilisons la méthode `.equals()` :

```java
String flavor1 = "Mango";
String flavor2 = "Matcha";

System.out.println(flavor1.equals("Mango")); // Prints: true
System.out.println(flavor2.equals("Mango")); // Prints: false
System.out.println(flavor1.equals(flavor2)); // Prints: false
```

Il existe également une méthode `.equalsIgnoreCase()` qui compare deux Strings sans prendre en compte les majuscules/minuscules.

## .indexOf()
Si l’on veut connaître l’index de la première occurrence d’un caractère dans une chaîne, on peut utiliser la méthode `.indexOf()` sur une chaîne. N'oubliez pas que les indices en Java commencent par 0 :

```java
String letters = "ABCDEFGHIJKLMN";
System.out.println(letters.indexOf("C")); // Prints: 2
```

Bien que "C" est la troisième lettre de l'alphabet anglais, elle se situe dans le deuxième index de la chaîne.

Supposons que nous voulions connaître l'index de la première occurrence d'une sous-chaîne entière. La méthode `.indexOf()` peut également renvoyer l'endroit où commence la sous-chaîne (l'index du premier caractère de la sous-chaîne) :

```java
String letters = "ABCDEFGHIJKLMN";
System.out.println(letters.indexOf("EFG")); // Prints: 4
```

Cela génère 4, car 'EFG' commence à index 4.

Si la méthode `.indexOf()` ne trouve pas ce qu’elle cherche, elle renverra -1.

## .charAt()
La méthode `.charAt()` renvoie le caractère situé à l'index spécifié :

```java
String currency = "Yen";
System.out.println(currency.charAt(2)); // Prints: n
```

Supposons que nous essayions de renvoyer le caractère situé à l'index 4. Cela produirait une erreur `IndexOutOfBoundsException` car l'index 4 est hors de la plage de la variable `currency` :

```
java.lang.StringIndexOutOfBoundsException: String index out of range: 4
```

## .substring()
Il peut y avoir des moments où nous voulons seulement une partie d'une chaîne. Dans de tels cas, nous souhaiterons peut-être extraire une sous-chaîne d’une chaîne. La méthode `.substring()` fait exactement cela :

```java
String line = "It was the best of times, it was the worst of times.";
System.out.println(line.substring(26)); // Prints: it was the worst of times.
```

Il affiche ce qui commence à index 26 et se termine à la fin de ligne. La sous-chaîne commence par le caractère à l'index spécifié et s'étend jusqu'à la fin de la chaîne.

Mais supposons que nous voulions une sous-chaîne au milieu de la chaîne. Nous pouvons inclure deux arguments avec cette méthode de chaîne :

```java
String line = "It was the best of times, it was the worst of times.";
System.out.println(line.substring(7, 24)); // Prints: the best of times
```

Il génère la sous-chaîne qui commence à index 7 et se termine à index 23.

## .toUpperCase() et .toLowerCase()
Il y aura des moments où nous aurons un mot dans une casse autre que celui dans lequel nous en avons besoin. Heureusement, Java dispose de quelques méthodes pour nous aider :

**.toUpperCase()**: renvoie la valeur de chaîne convertie en majuscule
**.toLowerCase()**: renvoie la valeur de chaîne convertie en minuscule
Par exemple:
```java
String input = "Cricket!";
System.out.println(input.toUpperCase()); // Prints: "CRICKET!"
System.out.println(input.toLowerCase()); // Prints: "cricket!"
```
