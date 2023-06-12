# Trouver le plus long mot

Retournez le plus long mot de la phrase fournis.

La réponse doit être un nombre.

```js
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

# Tests

**findLongestWordLength("The quick brown fox jumped over the lazy dog")** doit retourner un nombre

**findLongestWordLength("The quick brown fox jumped over the lazy dog")** doit retourner **6**

**findLongestWordLength("May the force be with you")** doit retourner **5**

**findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")** doit retourner **19**
