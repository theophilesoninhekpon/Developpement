import getUser from './request/request.js';
import showError from './error/error.js';
import showUser from './ui/ui.js';
import { deleteCardIf } from './utilities/utilities.js';

document.addEventListener('DOMContentLoaded', ()=> {


    deleteCardIf(document.querySelector('input[name="username"]').value);
    
    document.querySelector('form').addEventListener('submit', e => {
        
        let username = document.querySelector('input[name="username"]').value;
        e.preventDefault();

        getUser(username)
            .then(user => showUser(user))
            .catch(err => showError(err));
        
        document.querySelector('input[name="username"]').value = '';
    });


})