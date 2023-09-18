import { dateDiffInDays, deleteCardIf } from '../utilities/utilities.js';

function showUser(user) {
       
        if(!user.message) {
            deleteCardIf(true);
            // Eléments de la vue à modifier
            let userName = document.getElementById('user-name');
            let name = document.getElementById('name');
            let numberOfRepos = document.getElementById('repos');
            let avatarUrl = document.getElementById('avatar');
            let dateInfos = document.getElementById('date');
            let profileUrl = document.getElementById('link');

            // Traitement des données
            let date = user.created_at;
            let dateFormatted = new Date(date).toLocaleDateString();

            let diffOfDays = dateDiffInDays(date);
        
            // Insertion des données dans le DOM
            userName.textContent = user.login;
            name.textContent = user.name;
            dateInfos.textContent = `Utilisateur créé le ${dateFormatted}, ${diffOfDays}`;
            numberOfRepos.textContent = `Nombre de repos publics: ${user.public_repos}`;
            avatarUrl.src = user.avatar_url;
            profileUrl.href=user.html_url;

        } else {
            deleteCardIf(false);
            throw new Error('Cet utilisateur n\'existe pas!');
        }   
      
}

export default showUser;

// date.slice(0, date.indexOf('T'))
// .split('-')
// .reverse()
// .join('-')
// .replace(/-/g,'/');