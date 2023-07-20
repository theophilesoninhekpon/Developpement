function Feature(config){

    return function(target){

        Object.defineProperty(
            target.prototype,
            "say",
            {
                value : () => config.action
            }
        )
    }
}

function changeFonction(target, key, descriptor){
    descriptor.writable = false;

    return descriptor ;
}

@Feature({
    action: "Nage comme un canard"
})
class Duck {
    // @changeFonction
    say() { return "Je suis un oiseau"; }
}

let duck = new Duck();
// duck.say = () => "Je suis un canard";

console.log(duck.say());
// console.log(duck.swim());
// console.log(duck.say());

enum A {
    a = "a",
    b = "b", 
    c = "c"
}
