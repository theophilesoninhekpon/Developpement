'use strict';
class Music {
    play() {
        return "play music";
    }
    get instrument() {
        return this._instrument;
    }
}
class Guitar extends Music {
    constructor() {
        super(...arguments);
        this._instrument = "Guitare";
    }
}
let guitar = new Guitar();
console.log(guitar.instrument);
