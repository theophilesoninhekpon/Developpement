# Factoriser un nombre

Retourner le factoriel du nombre fournis.

Si nous prenons un entier **n**, le factoriel de n est le produit de tous les entiers positifs inférieurs ou égals à **n**.

Les factoriels sont souvent représentés par le racourci **n!**.

Par exemple: ``5! = 1 * 2 * 3 * 4 * 5 = 120``

Seuls les entiers supérieurs ou égals à zéro seront fournis à la fonction.

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# Tests

**factorialize(5)** devrait retourner un nombre

**factorialize(5)** devrait retourner **120**.

**factorialize(10)** devrait retourner **3628800**

**factorialize(20)** devrait retourner **2432902008176640000**

**factorialize(0)** devrait retourner **1**
