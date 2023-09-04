
<?php
// Toujours écrire au début de tout script php
// La directive "declare(strict_types=1)" pour activer le mode strict de typage.
declare(strict_types=1);

echo "Hello World!";
print('Salut');

$user = "Salut!";
$firstName = "John";
$lastName = "Doe";

$msg = <<<text
bonjour
tout 
le 
monde
\n
text;

var_dump($firstName);
echo "<br>";
var_dump($lastName);

echo $firstName;
echo $lastName;
echo "<br>";
echo $msg;

$fruits = array("pomme", "orange", "banane");
$notes = [20, 18, 16];
$notes = [20, true, 16, null];

// Lire un tableau
var_dump($fruits);
echo "<pre>";
print_r($fruits); // print as readable
echo "</pre>";

// Exo 1
$age = 0;

if ($age < 18) {
  echo "Vous êtes mineur !";
} else if ($age > 18) {
  echo "Vous êtes majeur !";
} else {
  echo "Vous avez 18 ans !";
}

$day;
switch ($day) {
  case 0:
    echo "dimanche";
    break;
  case 1:
    echo "lundi";
    break;
  case 2:
    echo "mardi";
    break;
  case 3:
    echo "mercredi";
    break;
  case 4:
    echo "heudi";
    break;
  case 5:
    echo "vendredi";
    break;
  default:
    echo "samedi";
    break;
}

$number = 0;

while( $number < 10){
  echo $number;
  $number++;
}

for ($number=0; $number < 10; $number++) { 
  # code...
  echo $number;
}

echo "<br>";
echo "<br>";

$fruits = ["pomme", "raisin", "banane"];

for($i = 0; $i < count($fruits); $i++){

  echo $fruits[$i]." ";

}

foreach ($fruits as $f) {
  # code...
  echo $f . " ";
}

// Tableau associatif
$notes = ["User A" => 20, "User B" => 20, "User C" => 20, "User D" => 20, "User E" => 20];

/* Un tableau associatif en PHP, est un tableau où les valeurs sont associées à des clés plutôt qu'à des indices numériques dans les tableaux indexés. Dans un tableau, 
associatif, chaque élément est identifié par une clé unique qui permet d'accéder à la valeur correspondante.
*/

$notes = [
  "User A" => 20,
  "User B" => 14,
  "User C" => 12,
  "User D" => 16,
  "User E" => 20
];

$notes2 = [
  "User A" => 20,
  "User B" => 14,
  "User C" => 12,
  "User D" => 16,
  "User E" => 20
];

echo $notes2["User B"];

foreach ($notes2 as $student => $note) {
  echo "L'étudiant" . $student . " a un note de " . $note . "/20 <br>";
  # code...
}

echo "<br>";
echo "<br>";

// Fonctions

function add(int $x, int $y): int{
  return $x + $y;
}

echo add(4.5, 6.5);

echo add(y: 5, x: 3);
/**
 * Nous avons la capacité d'annoter les paramètres de fonction et les valeurs de retour. Cela permet d'améliorer la lisibilité 
 */

 # Class

 declare(strict_types=1);
 class User {
  public function __construct(){
    echo 'appel du constructeur';
  }
 }


?>

