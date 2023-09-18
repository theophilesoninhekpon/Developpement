# Les Promesses avec `fetch` en JavaScript

Lorsque vous travaillez avec l'API `fetch` en JavaScript, il est essentiel de comprendre que `fetch` retourne des promesses. Les promesses sont un concept fondamental dans JavaScript pour gérer des opérations asynchrones, telles que les requêtes réseau.

## Qu'est-ce qu'une Promesse ?

Une promesse est un objet qui représente la réussite ou l'échec d'une opération asynchrone. Dans le cas de `fetch`, il s'agit de la récupération de données depuis un serveur distant. Une promesse peut être dans l'un des trois états suivants :

- **Pending (En attente)** : L'opération asynchrone est en cours d'exécution, et la promesse est en attente de son résultat.
- **Fulfilled (Résolue)** : L'opération asynchrone s'est terminée avec succès, et la promesse contient les données renvoyées.
- **Rejected (Rejetée)** : L'opération asynchrone a échoué, et la promesse contient une erreur.

## `fetch` et les Promesses

Lorsque vous utilisez `fetch` pour effectuer une requête HTTP, elle retourne immédiatement une promesse. Cette promesse représente l'état de la requête en cours. Vous pouvez ensuite utiliser les méthodes `.then()` et `.catch()` pour gérer la promesse :

- `fetch('https://api.example.com/data')` renvoie une promesse pour récupérer des données à partir de l'URL spécifiée.
- `.then(response => response.json())` permet de traiter la promesse lorsque la requête est réussie et que les données sont disponibles sous forme de réponse. Vous pouvez ensuite utiliser `.json()` pour extraire les données JSON.
- `.catch(error => console.error('Erreur :', error))` permet de gérer les erreurs en cas d'échec de la requête.

### Exemple :

```javascript
fetch('https://api.github.com/users/{username}')
  .then(response => response.json())
  .then(data => {
    // Traitez ici les données renvoyées
    console.log(data);
  })
  .catch(error => {
    // Gérez ici les erreurs éventuelles
    console.error('Une erreur s\'est produite :', error);
  });
