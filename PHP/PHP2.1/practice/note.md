## Communication HTTP client-serveur

Lorsque qu'un serveur communique avec un client, plusieurs en-têtes sont souvent échangées pour communiquer
des infos supplémentaires. Voici quelques-uns des en-têtes couramment envoyés par un serveur PHP.

1. Location : Utilisé pour rediriger le navigateur vers une autre page.
ex: L'entête `Location : https: //example.com`provoquera une redirection vers le site web https://example.com

2. Set-Cookie: Utilisé pour définir des cookies dans le navigateur.
ex: `Set-Cookie: username=john` définit un cookie nommé "username" avec la valeur "john"

3. Content-Disposition : utilisé pour indiquer au navigaateur de traiter le contenu
ex: `Content-Disposition: attachment; filename=le_code.pdf`
peut être utilisé pour forcer le téléchargement d'un fichier avec le nom "le_code.pdf"

4. Content-Type: Définit le contenu de la réponse.
ex: `Content-Type: text/html` indique que la réponse est du code HTML. D'autres valeurs courantes incluent: 
application/json, image/jpeg

5. Content-Length: Indique la taille de la réponse en octets.

6. Expires: indique la date et l'heure d'expiration

D'autres: HTTP/1.1 xxx Status Code, Cache-control