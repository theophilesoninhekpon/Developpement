'use strict'

class Game{

    #width;
    #height;
    #color;

    constructor(width, height, color){

        this.#width = width;
        this.#height = height;
        this.#color = color;

    }

    get width(){

        return this.#width;

    }

    set width(newWidth){

        this.#width = newWidth;

    }

    get height(){

        return this.#height;

    }

    set height(newHeight){

        this.#height = newHeight;

    }

    get color(){

        return this.#color;

    }

    set color(newColor){

        this.#color = newColor;

    }

}