<?php 

class User {

    // Constantes
    const pieds = 2;

    // Membres | propriétés | champs

    public $nom = "John";

    public $prenom = "Doe";

    public $age = 24;
    
    public function present() {
        echo "Je m'appelle " . $this->nom . " " . $this->prenom .". J'ai ". self::pieds. "pieds.";
    }
    
}