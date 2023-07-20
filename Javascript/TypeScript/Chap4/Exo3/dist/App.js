// function Feature(config){
var Thing = /** @class */ (function () {
    function Thing() {
        this.name = "Salut";
    }
    Thing.prototype.swim = function () {
        return "Salut les gens";
    };
    return Thing;
}());
var thing = new Thing();
console.log(thing.swim());
