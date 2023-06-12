# Gérer la casse d'une phrase

Retournez la chaîne de caractères qui vous est fournis avec la première lettre de chaque mot en majuscule. Assurez-vous que le reste de chaque mot est en minuscule.

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

# Tests

**titleCase("I'm a little tea pot")** doit retourner un string

**titleCase("I'm a little tea pot")** doit retourner **I'm A Little Tea Pot**

**titleCase("sHoRt AnD sToUt")** doit retourner **Short And Stout**

**titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")** doit retourner **Here Is My Handle Here Is My Spout**
