<?php

class AuthController {

    private $model;

    public function __construct(AuthModel $model) {
        $this->model = $model;
    }

    public function signupAction($username, $password) {
        // on demande au modèle d'ajouter l'utilisateur
        $this->model->addUser($username, $password);
    }

    public function loginAction($username, $password) {
        // on demande au modèle de récupérer l'utilisateur "username"
        return $this->model->getUser($username);
    }
}