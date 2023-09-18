
## Explorer les Données

Une fois la requête (fetch) terminée avec succès, les données de réponse JSON seront stockées dans la variable data. Vous pouvez explorer ces données en utilisant JavaScript pour extraire des informations telles que le nom, la photo de profil, le nombre de repos, etc.

ajoutez le script suivant dans votre fichier `index.html`
```html
<div id="username"></div>
<img id="avatar" src="" alt="Photo de profil">
```
puis ajoutez le script suivant dans votre javascript
```js
fetch('https://api.github.com/users/{username}')
  .then(response => response.json())
  .then(data => {
    const username = data.login; // Nom d'utilisateur
    const avatarURL = data.avatar_url; // URL de la photo de profil

    // Affiche les informations dans la console
    console.log(`Nom d'utilisateur : ${username}`);
    console.log(`URL de la photo de profil : ${avatarURL}`);

    // Met à jour l'interface utilisateur
    document.getElementById('username').textContent = `Nom d'utilisateur : ${username}`;
    document.getElementById('avatar').src = avatarURL;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });

```

Voilà comment fetch est utilisé pour interagir avec une API comme celle de GitHub. Il vous permet de récupérer des données depuis une URL distante, de les traiter et de les utiliser dans votre application web.

N'hésitez pas à explorer davantage en extrayant des informations spécifiques des données renvoyées par l'API GitHub. Dans les prochaines étapes, vous apprendrez à afficher ces données dans votre interface utilisateur ou à les utiliser pour d'autres fonctionnalités passionnantes.
