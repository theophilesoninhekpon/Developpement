<?php

    class AuthView {

        // Vue pour se connecter
        public function showLoginForm(){

            echo <<<LOGIN
            <form action="index.php?action=login" method='post'>
                <input type='text' name='username' placeholder='Votre nom'>
                <input type='password' name='password' placeholder='Mot de passe'>
                <button type='submit'>Se connecter</button>
            </form>
            LOGIN;

        }

        // Vue pour créer un compte
        public function showSignupForm(){

            echo <<<SIGNUP
            <form action="index.php?action=signup" method='post'>
                <input type='text' name='username' placeholder='Votre nom'>
                <input type='password' name='password' placeholder='Mot de passe'>
                <button type='submit'>S'inscrire</button>
            </form>
            SIGNUP;

        }
    }