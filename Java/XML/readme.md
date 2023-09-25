## POM
Le POM (Project Object Model) est l'unité fondamentale d'un projet Maven. C'est un fichier XML qui contient les informations concernant le projet ainsi que les détails de configuration utilisés par Maven pour "builder" le projet.

Les configurations minimales nécessaires dans un ficher POM sont les suivantes:
- projet : l'élément racine
- modelVersion: version du POM (actuellement 4.0.0)
- groupId: l'id du groupe (en général l'adresse URL du site à l'envers ou le package)
- artifactId: le nom du projet ou de l'artefact
- version: version du projet

# Les dossiers importants 

### src/main/java
ce dossier est utiisé pour stocker les codes sources Java. Il contient donc les classes qui constituent la logique de l'application
### src/main/resources
ce dossier est utilisé pour stocker les ressources non-java dont l'application aura besoin. Ces ressources peuvent être des fichiers : 
de configuration, des fichiers XML, des images...
### src/main/webapp
ce dossier est utilisé spécifiquement pour les applications web. Il contient les ressources web telles que les fichiers HTML, CSS, JS, JSP, web.xml 
(appelé descripteur de déploiement) etc.