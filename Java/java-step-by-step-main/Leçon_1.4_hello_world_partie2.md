Vous souvenez-vous du "Hello World" ?

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello world!");
  }
}
```

Chaque programme Java doit avoir une méthode `main`, et chaque méthode `main` contient les paramètres `String[] args`, mais qu'est-ce que cela signifie? 
`args` est un ensemble de Strings qui est transmis au programme quand il est exécuté. Nous n'avons pas besoin de passer quoi que ce soit, mais nous pouvons si nous le voulons. Par exemple, nous pouvons éditer notre  classe HelloWorld pour utiliser des arguments: 

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello world, my name is " + args[0] + "!");
  }
}
```

Il est à noter que nous accédons aux éléments du tableau `args` de la même manière que nous n'accédrons aux éléments de tout autre tableau. 
Utilisons la nouvelle classe HelloWorld pour nous présenter. Tout d'abord, nous allons compiler notre classe comme avant : 

```java
javac HelloWorld.java
```
ensuite nous allons l'exécuter. Sauf que cette fois ci, nous allons passer un argument

```java
java HelloWorld Batman
```

Le programme nous affiche

```
Hello world, my name is Batman!
```

Deux choses à retenir sur la méthode `main`: 
    
- Tous les arguments passés par la ligne de commande, comme Batman ci-dessus, sont passés en tant que Strings. Donc, si nous avons un programme qui demande à l'utilisateur d'entrer son nom et son âge via la ligne de commande, nous devons traiter l'âge comme une chaîne jusqu'à ce que nous convertissons l'âge en un nombre entier.

- La plupart des programmes Java, sont composés de nombreux fichiers. Certains de ces fichiers auront des méthodes principales et d'autres n'en aurons pas, quand nous utiliserons la commande java, nous spécifions quelle classe Java à l'intérieur du programme a la méthode `main`. 
