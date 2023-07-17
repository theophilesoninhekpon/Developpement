'use strict'

let userName = "Tony";
let obj = {name: "john"};

class Person{

    name;
    firstName;

    constructor(name, firstName){

        this.name = name;
        this.firstName = firstName;

    }

    present(){
        console.log(`Je m'appelle ${this.name} ${this.firstName}`)
    }
}

let  user1 = new Person("Tony", "D'Almeida");
user1.present();

const pi:number = 12.5;
let hex: number = 0xf00d; // hexadécimal
let bin: number = 0b0001; // binaire

let color:string = "blue";

let isFree:boolean = false;

let arr: number[] = [1, 2, 3, 4];

let strArr: string[] = ['a', 'b', 'c'];

let arr2: [string, number] = ['a', 2];

let salary: number = 2_500_000_400;

console.log(salary)


// Fonctions

function add(a:string, b:string): string {

    return a.concat(b);
    
}

const enum Status {
    PAID = 'PAID',
    PENDING = 'PENDING',
    DENIED = 'DENIED'
}

let x:string;

function verify(): string {
    if (true){
        return x = Status.PAID;
    }
}

verify();

type UserType = {
    fname: string,
    lname: string,
    age: number
};

let visitor: UserType 

let user: UserType = {
    fname: 'John',
    lname: 'Doe',
    age : 24
};


// type Rect=  {
//     height: number,
//     width: number
// }

interface Rect{
    height: number,
    width: number
}

const rect:Rect = {
    height: 35,
    width: 50
}

console.log(rect)