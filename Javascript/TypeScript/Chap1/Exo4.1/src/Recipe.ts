class Recipe{
    name: string;
    star?: number;
}

let recipes: Recipe[] = [{name: "Frites", star: 4}, {name: "Poulet"}]

console.log(...recipes)