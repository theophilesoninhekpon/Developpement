<?php
namespace App;
use App\Traits\EmployeeTrait;
use App\Traits\PersonneTrait;

class Programmer {
    public function code() {
        echo "Je suis un programmeur";
    }

    use EmployeeTrait, PersonneTrait;

}