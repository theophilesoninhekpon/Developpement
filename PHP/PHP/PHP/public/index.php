<?php
// use App\Math\MathOperations;
// use App\Programmer;

// require __DIR__ . "/../vendor/autoload.php";

// $math = new MathOperations();

// $programmer = new Programmer;

// echo $math->calculate(1, 56);

// $programmer->present();

// echo "\n";

// $programmer->work();

// phpinfo();

// exit;

$user = [
    'firstname' => 'John',
    'lastname' => 'Doe',
    'age' => 24
];

// var_dump($user);

// var_dump("bonjour");

function add($num1, $num2) {
    return (string) $num1 + (string) $num2;
}

echo add(50, 23);
echo add("abc", "def");