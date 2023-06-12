# Slice & Splice

On vous fournis deux tableaux et un index.

Copiez chaque élément du premier tableau dans le second tableau, dans l'ordre.

Commencez par insérer les éléments à l'index **n** du second tableau.

Retournez le tableau résultant. Vous ne devez pas modifier les tableaux de départ.

```js
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

# Tests

**frankenSplice([1, 2, 3], [4, 5], 1)** devrait retourner **[4, 1, 2, 3, 5]**.

**frankenSplice([1, 2], ["a", "b"], 1)** devrait retourner **["a", 1, 2, "b"]**.

**frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)** devrait retourner **["head", "shoulders", "claw", "tentacle", "knees", "toes"]**.

Tous les éléments du premier tableau devraient être ajoutés au second tableau dans leur ordre originel. **frankenSplice([1, 2, 3, 4], [], 0)** devrait retourner **[1, 2, 3, 4]**

Le premier tableau devrait rester pareil après exécution de la fonction de même que le second.
