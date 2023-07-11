# Répéter une chaîne de caractères

Répétez un string (premier argument) **n** fois (second argument). Retournez une chaîne de caractère vide si **n** n'est pas un nombre positive. 

Bonus: (après à trouvé)

```js
function repeatStringNumTimes(str, n) {
  return str;
}

repeatStringNumTimes("abc", 3);
```

# Tests

**repeatStringNumTimes("*", 3)** doit retourner **\*\***

**repeatStringNumTimes("abc", 3)** doit retourner **abcabcabc**

**repeatStringNumTimes("abc", 4)** doit retourner **abcabcabcabc**

**repeatStringNumTimes("abc", 1)** doit retourner **abc**

**repeatStringNumTimes("abc", -2)** doit retourner **""**

**repeatStringNumTimes("abc", 0)** doit retourner **""**

