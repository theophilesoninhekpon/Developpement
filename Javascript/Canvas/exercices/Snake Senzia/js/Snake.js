'use strict'

class Snake{

    #width;
    #height;
    #color;
    #x;
    #y;
    
    // Constructeur
    constructor(width, height, x, y, color){

        this.#width = width;
        this.#height = height;
        this.#x = x;
        this.#y = y;
        this.#color = color;
        
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
       
        context.fillStyle = this.#color;
        context.fillRect(this.#x, this.#y, this.#width, this.#height);
        
    }
    
}