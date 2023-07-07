'use strict'

import Admin from "./Admin.js";
import User from "./User.js";

document.addEventListener("DOMContentLoaded", ()=>{

    let subscriber = new User("Théophile", "Soninhekpon");

    console.log(subscriber);

    let client = new User("Tony", "D'almeida", null, 22)

    console.log(client.age)

    
    class A {
        constructor(){
            this.a = null;
            this.b = null;
        }

    }

    const obj = new A();
    obj.a = "Toto";

    console.log(obj)
    
})






/*



Quiz_PHP4

1. En Laravel, à quoi sert la directive @include ?
Elle permet d'inclure une vue dans une autre vue
Elle instancie une classe dans une vue
Elle ajoute un nouveau champs dans les migrations
Elle n'existe pas en Laravel

2. En Laravel, dans quel dossier se trouve les routes ?
router
routes
web.php
api.php

3. En Laravel, que peut-on utiliser au lieur de var_dump ou die
dump()
vd()
dd()
dump_die()

4. En Laravel, imaginons un contrôleur, et dans lequel nous considérons l'action suivante:

use App\Models\User;

public function store(Request $request) {
 $user = User::find(1);
 $request['user_id'] = $user->id;

 $this->validate($request, [
  'title' => 'required | string',
  'body' => 'required | string',
  'user_id' => 'required | numeric | exists:users, id';
 ]);

 $art = Article::create($request->all());
}

Que se passe-t-il lorsqu'un formulaire est soumis et valide ?
On affiche à nouveau le formulaire
On enrégistre le nouvel article en base de données
On enrégistre le nouvel article en base de données et on redigige l'utilisateur vers la page associée audit article
On enrégistre le nouvel article en base de données et on redirige l'utilisateur vers la page d'accueil

5. En Laravel, quel est le rôle de Blade ?
Générer du HTML de façon plus maintenable et sécurisée qu'en PHP pur
Exécuter des suites de tests automatisés
Remplir des suites de données avec de faux contenus à des fins de développement
Automatiser certaines tâches comme la compression des images ou la compilation du Sass en CSS

6. En Laravel, qu'affiche le morceau de template suivant ?

@extends('layouts.app')

@section('body')
 <ul>
  @foreach (articles as article)
   <li>
    <h2>{{ article.title }}</h2>
    <p>{{ article.lede }}</p>
   <li>
  @endforeach
 </ul>
@endsection
Une liste d'articles
Le body HTML
Le titre et le chapeau d'un article si celui-ci existe
Une liste d'utilisateurs

7. En Larave, dans quel dossier doit-on placer les assets finaux qui seront servis aux navigateurs (CSS, JS, images, etc.) ?
/tests
/public
/vendor
/var

8. En Laravel, dans le cadre de l'utilisation de l'ORM Eloquent, quelle commande permet de générer la structure de la base de données à partir des migrations ?
php artisan make:migration
php artisan make:migrate
php artisan migration
php artisan db:seed

9. Laravel est un projet plus ancien que Symfony
Vrai
Faux

10. Laravel nécessite l'achat d'une licence afin de pouvoir être utilisé dans le cadre d'un projet commercial
Vrai
Faux

11. En Larave, à quoi sert la directive @yield ?
À afficher le contenu d'une section
À étendre un template
À inclure un fichier
Cette directive n'existe pas en Laravel

12. En Laravel,quelle fonction est appellée pour créer les champs "created_at" et "updated_at" dans une migration ?
Schema::create('table', function (Blueprint $table) { $table->timestamps(); });
Schema::create('table', function (Blueprint $table) { $table->date(); });
Schema::create('table', function (Blueprint $table) { $table->timestamp(); });
Schema::create('table', function (Blueprint $table) { $table->dateTime(); });

13. Que sont les migrations Laravel ?
Un ensemble de règles à suivre lors de la mise à jour de Laravel
Une liste de commandes utilisées pour installer les dépendances PHP
Ils sont similaires au control des versions pour la base de données, permettant ainsi à une équipe de définir et de partager le schéma de la BDD d'une application
Laravel ne supporte pas les migrations

14. En Laravel, qu'est ce que le "seeding" ?
Le processus de développement d'une facade
Le processus d'ajouter de fausses données dans la BDD
Une meilleure manière de communiquer avec le conteneur de services
Le processus de récupérer les migrations

15. Quelles sont les méthodes que contiennent une migration ?
create() et delete()
up() et down()
make() et remove()
execute() et destroy()

16. À quoi sert un model en Laravel ?
À implémenter différents widgets dans une application
À améliorer l'expérience utilisateur
À envoyer et récupérer les données d'une table de la BDD
À autogénérer les composants pour initier une application

17. En Laravel, quel est le rôle de l'ORM Eloquent ?
Servir d'interface entre les modèles PHP et les tables en base de données
Gérer le routing de l'application
Générer des proxies dans le cadre de l'injection de dépendances par autowiring
Servir d'interface entre les formulaires PHP et leurs templates HTML

18. Qu'est ce que Eloquent, et à quoi sert-il ?
C'est un gestionnaire de dépendance php
C'est un mapping objet-relationnel utilisé pour interagir avec la BDD
C'est une API utilisée pour se connecter à la BDD
C'est un simple moyen de s'authentifier

19. Que signifie SQL ?
Server Query Language
Structured Query Language
Simple Query Language
Standard Query Language

20. Que retourne: SELECT * FROM table LIMIT 10 OFFSET 5; ?
Les enregistrements 6 à 15 d'une table
Les enregistrements 1 à 10 d'une table
Les enregistrements 0 à 9 d'une table
Les enregistrements 5 à 10 d'une table
Soumettre




 */