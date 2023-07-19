"use strict";
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special"
Object.defineProperty(exports, "__esModule", { value: true });
const MockProducts_1 = require("./data/MockProducts");
const Product_1 = require("./Product");
let products = [];
MockProducts_1.MockDetails.forEach((detail) => {
    MockProducts_1.MockDelivery.forEach((delivery) => {
        if (detail.id === delivery.id) {
            products.push(new Product_1.Product(detail, delivery.delivery));
        }
    });
});
console.log(products);
let specialProducts = [];
specialProducts = products.filter((product) => product.option === MockProducts_1.Delivery.Special);
console.log(specialProducts);
