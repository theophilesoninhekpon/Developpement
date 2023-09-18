## Introduction à fetch()
`fetch` est une fonction JavaScript moderne qui est utilisée pour effectuer des requêtes réseau (comme les requêtes HTTP) pour récupérer des données à partir de ressources externes, telles que des API web, et pour envoyer des données à des serveurs. Elle est couramment utilisée dans le développement web pour récupérer des données depuis des serveurs et les afficher sur une page web.

## Utiliser `fetch()` pour Interagir avec l'API GitHub

### Étape 1 : Effectuer une Requête GET

Pour récupérer des informations sur un utilisateur GitHub, suivez ces étapes en utilisant JavaScript et la fonction `fetch()` :
Créez un fichier `index.html` puis insérer le script suivant:
```js
fetch('https://api.github.com/users/{username}')
.then(response => response.json())
.then(data => {
 // Traitez ici les données reçues depuis l'API
 console.log(data);
})
.catch(error => {
 // Gérez ici les erreurs éventuelles
 console.error('Une erreur s\'est produite :', error);
});
```
Dans cet script, fetch envoie une requête GET à l'URL spécifiée, convertit la réponse en JSON pour être utilisée ultérieurement, puis affiche les résultats obtenus dans la console.

Une variation un peu plus robuste du script vous est fournis ci-dessous:

```js
fetch('https://api.github.com/users/{username}')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de réseau : ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Traitez les données JSON ici
    console.log(data);
  })
  .catch(error => {
    // Gérez les erreurs ici
    console.error('Erreur :', error);
  });

```

Remplacez {username} par le nom d'utilisateur GitHub que vous souhaitez récupérer.

Exécutez le code dans la console de votre navigateur. La fonction fetch enverra une requête GET à l'API GitHub avec le nom d'utilisateur spécifié.
