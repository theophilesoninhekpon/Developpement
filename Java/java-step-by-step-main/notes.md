
## Les Génériques

Les Génériques font référence à la capacité d'utiliser un "type".
Comme paramètre de méthode ou de classe. Ceci donne la possibilité de
définir un ensemble de classes ou de méthodes pouvant traiter différents types
avec le même bout de code.

**NB**: Les types de paramètres dans une classe ou méthode générique doivent être 
une référence, pas un type primitif (comme int, double, char...)

## Méthodes génériques

Une méthode générique peut être appelée avec des arguments de différents types.

```java
<T> void myMethod(T argument) {
    // corps de la méthode
}

public class App<T (extends Number)> {
    public T add(T a, T b) {
        return a + b;
    }
}
```

## Formater un résultat
System.out.printf(format: "...%s", a);

%s = string
%d = number
%f = float
