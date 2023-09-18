## async/await pour simplifier le code
`async/await est une syntaxe JavaScript qui permet de gérer les promesses de manière plus lisible et plus séquentielle. Voici comment vous pouvez réécrire l'exemple du précédent didactel en utilisant async/await :
```js
async function fetchData() {
  try {
    const response = await fetch('https://api.github.com/users/{username}');
    const data = await response.json();
    // Traitez ici les données renvoyées
    console.log(data);
  } catch (error) {
    // Gérez ici les erreurs éventuelles
    console.error('Une erreur s\'est produite :', error);
  }
}

// Appelez la fonction pour récupérer les données
fetchData();
```
L'utilisation de await permet d'attendre la résolution des promesses avant de passer à l'étape suivante, ce qui simplifie la gestion des erreurs et facilite la lecture du code.

Pour les plus rétissant quant à l'utilité de fetch, voici un exemple simple où l'utilisation d'async/await simplifie la syntaxe des requêtes en comparaison avec l'utilisation de .then() et .catch() avec fetch. Dans cet exemple, nous utiliserons fetch pour effectuer une requête GET vers une API factice qui renvoie des informations sur des livres. Nous commencerons par la version utilisant .then() et .catch(), puis nous montrerons comment simplifier la syntaxe en utilisant async/await.

### Utilisation de .then() et .catch()
```js
function fetchBooks() {
  fetch('https://api.example.com/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur de réseau : ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Traitez ici les données renvoyées (par exemple, affichez-les dans la console)
      console.log(data);
    })
    .catch(error => {
      // Gérez ici les erreurs éventuelles
      console.error('Une erreur s\'est produite :', error);
    });
}

// Appelez la fonction pour récupérer les livres
fetchBooks();

```

### Utilisation d'async/await

```js
async function fetchBooks() {
  try {
    const response = await fetch('https://api.example.com/books');
    if (!response.ok) {
      throw new Error('Erreur de réseau : ' + response.status);
    }
    const data = await response.json();
    // Traitez ici les données renvoyées (par exemple, affichez-les dans la console)
    console.log(data);
  } catch (error) {
    // Gérez ici les erreurs éventuelles
    console.error('Une erreur s\'est produite :', error);
  }
}

// Appelez la fonction pour récupérer les livres
fetchBooks();

```
Dans les deux exemples, nous effectuons la même opération : nous utilisons fetch pour récupérer des données depuis une API. Cependant, dans la version utilisant async/await, le code est plus lisible et suit un flux plus séquentiel. Les erreurs sont gérées avec un simple bloc try...catch, ce qui simplifie la gestion des erreurs par rapport à la chaîne de .then() et .catch() dans la version précédente. Cela rend également le code plus facile à maintenir et à comprendre, en particulier lorsque vous avez plusieurs opérations asynchrones à gérer.
