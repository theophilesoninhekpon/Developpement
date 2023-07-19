"use strict";
class Queue {
    constructor() {
        this.arr = [];
        this.i = 0;
    }
    push(a) {
        this.arr[this.i] = a;
        this.i++;
    }
    pop() {
        return this.arr[0];
    }
}
let queue = new Queue();
queue.push([3, 5, 3]);
queue.push([25]);
queue.push([3, 5.36, -569]);
queue.push([3, 5, 3, 6, 6, 6, 58, 45]);
console.log(queue.pop());
