# Gardien de la vérité

Retirez toutes les valeurs fausses d'un tableau. Retournez un nouveau tableau; ne modifiez pas le tableau originel.

Les valeurs fausses en JavaScript sont **false**, **null**, **0**, **""**, **undefined**, et **NaN**

Indice: Essayez de convertir chaque valeur en Booleen

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# Tests

**bouncer([7, "ate", "", false, 9])** doit retourner **[7, "ate", 9]**.

**bouncer(["a", "b", "c"])** doit retourner **["a", "b", "c"]**.

**bouncer([false, null, 0, NaN, undefined, ""])** doit retourner **[]**.

**bouncer([null, NaN, 1, 2, undefined])** doit retourner **[1, 2]**.
