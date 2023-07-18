'use strict'

class Product{

    private _name: string;
    protected _ref: number = 1000;

    constructor(name: string, ref: number){
        this._name = name;
        this._ref = ref;
    }

    get name(): string {
        return this._name;
    }

    get ref(): number {
        return this._ref;
    }

    set name(name: string){
        this._name = name;
    }

    set ref(ref: number){
        this._ref = ref;
    }

}

let bike = new Product("Super Bike", 4000);

bike.name = "Super Matéo";

bike.ref = 1_300_000;

console.log(bike.name, bike.ref);




