interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck{
    
    name;
    constructor(name: string){
        this.name = name;
    }

    swim(): string{
        return "Nage comme un canard";
    }

}

let duck = new Thing('')
console.log(duck.swim());


