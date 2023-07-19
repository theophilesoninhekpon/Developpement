
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special"

import { Details, Delivery, MockDetails, MockDelivery } from "./data/MockProducts";
import { Product } from "./Product";

let products: Array<Product<Details, Delivery>> = [];

MockDetails.forEach(function(detail){

    MockDelivery.forEach((delivery)=> {
        
        if(detail.id === delivery.id){

            products.push(new Product(detail, delivery.delivery))

        }

    })
    
})

console.log(products);

let specialProducts : Array<Product<Details, Delivery>> = [];

specialProducts = products.filter((product) => product.option === Delivery.Special)

console.log(specialProducts);