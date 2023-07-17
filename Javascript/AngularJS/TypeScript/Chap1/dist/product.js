'use strict';
class Product {
    constructor(name, ref) {
        this._ref = 1000;
        this._name = name;
        this._ref = ref;
    }
    get name() {
        return this._name;
    }
    get ref() {
        return this._ref;
    }
    set name(name) {
        this._name = name;
    }
    set ref(ref) {
        this._ref = ref;
    }
}
let bike = new Product("Super Bike", 4000);
bike.name = "Super Matéo";
bike.ref = 1300000;
console.log(bike.name, bike.ref);
