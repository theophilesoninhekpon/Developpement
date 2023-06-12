# Tronquer un string

Tronquez un string (premier argument) si sa longueur est supérieure à la longueur maximale demandée (second argument). Retournez la chaîne de caractères tronquée avec à la fin **...**

```js
function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

# Tests

**truncateString("A-tisket a-tasket A green and yellow basket", 8)** doit retourner **A-tisket...**

**truncateString("Peter Piper picked a peck of pickled peppers", 11)** doit retourner **Peter Piper...**

**truncateString(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))** doit retourner **A-tisket a-tasket A green and yellow basket**

**truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)** doit retourner **A-tisket a-tasket A green and yellow basket**

**truncateString("A-", 1)** doit retourner **A...**

**truncateString("Absolutely Longer", 2)** doit retourner **Ab...**
