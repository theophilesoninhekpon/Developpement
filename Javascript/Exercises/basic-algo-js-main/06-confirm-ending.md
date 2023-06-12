# Confirmer la terminaison

Vérifier si une chaîne de caractères se termine par une chaîne précise de caractères.

Ce challenge peut être résolu avec la méthode ``.endsWith()``, introduite dans le ES2015. Mais pour ce challenge, nous aimerions que vous utilisez à la place l'une des méthodes de sous-chaînes JavaScript

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# Tests

**confirmEnding("Bastian", "n")** doit retourner **true**

**confirmEnding("Congratulation", "on")** doit retourner **true**

**confirmEnding("Connor", "n")** doit retourner **false**

**confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")** doit retourner **false**

**confirmEnding("He has to give me a new name", "name")** doit retourner **true**

**confirmEnding("Open sesame", "same")** doit retourner **true**

**confirmEnding("Open sesame", "game")** doit retourner **false**
