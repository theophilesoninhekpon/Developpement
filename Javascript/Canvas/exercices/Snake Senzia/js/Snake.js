'use strict'

class Snake{

    #width;
    #height;
    #color;
    #x;
    #y;
    #snakeParts;
    #game;

    // Constructeur
    constructor(width, height, x, y, color, game = {}){

        this.#width = width;
        this.#height = height;
        this.#x = x;
        this.#y = y;
        this.#color = color;
        this.#snakeParts = [];
        this.#game = game;
        
    }

    // Accesseurs
    get width(){

        return this.#width;

    }
    get height(){

        return this.#height;

    }
    get x(){

        return this.#x;

    }
    get y(){

        return this.#y;

    }
    get color(){

        return this.#color;

    }

    // Mutateurs
    set width(newWidth){

        this.#width = newWidth;

    }
    set height(newHeight){

        this.#height = newHeight;

    }
    set x(newX){

        this.#x = newX;

    }
    set y(newY){

        this.#y = newY;

    }

    // Méthodes

    displaySnake(){
        
        this.#snakeParts.forEach((element)=>{
            
            context.clearRect(0, 0, this.#game.width, this.#game.height);
            context.fillStyle = this.#color;
            context.fillRect(element.x, element.y, this.#width, this.#height);

        });
        
    }

    growSnake(){

        this.#x += this.#width;
        let snakePart = {};
        snakePart.x = this.#x;
        snakePart.y = this.#y;
        this.#snakeParts.push(snakePart);
        
    }
    
}

export default Snake;