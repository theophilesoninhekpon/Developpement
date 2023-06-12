# Retourner le plus grand nombre de chaque tableau

Retournez un tableau constitué du plus grand nombre de chaque tableau. Pour une simplicité, il vous sera fournit un tableau de 4 sous-tableau.

```js
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

# Tests

**largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])** doit retourner un tableau

**largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])** doit retourner **[27, 5, 39, 1001]**

***largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])** doit retourner **[9, 35, 97, 1000000]**

**largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])** doit retourner **[25, 48, 21, -3]**
