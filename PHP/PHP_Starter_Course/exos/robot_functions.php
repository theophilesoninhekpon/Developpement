<?php

    /**
     * Méthode qui crée aléatoirement le nom du robot
     * @param mixed $arr
     * @return mixed
     */
    function generateRandomRobotName(){

        $number = rand(1000, 9999);
        $alphabetLetters = range('A', 'Z');

        return$alphabetLetters[array_rand($alphabetLetters)] . $alphabetLetters[array_rand($alphabetLetters)] . $number;

    }
    
    /**
     * Renvoie une salutation avec le nom du robot
     */
    function greet(string $name){
        return 'Salut, humain. Je suis '. $name;
    }

    /**
     * Détermine le comportement du robot
     */
    function robotBehaviour(?string $behavior) {
        
        $random = rand(1, 3) / 3;
        
        if($behavior){
            if($behavior === "diabolic"){
                return "<span class='diabolic'>Extermination ! Extermination !</span>";
            } else {
                return "Vous voulez un café ?";
            }
        }

        if($random <= 2/3){
            return "Vous voulez un café ?";
        } else {
            return "Extermination ! Extermination !";
        }


    }
