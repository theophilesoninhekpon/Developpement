class Queue<T> {

    private _arr: T[] = [];

    push(a: T):void{
        
        this._arr.push(a);
        
    }

    pop():T | undefined{

        return this._arr.shift()

    }

}

let queue = new Queue<Array<number>>();

queue.push([3, 5, 3]);
queue.push([25]);
queue.push([3, 5.36, -569]);
queue.push([3, 5, 3, 6, 6, 6, 58, 45]);

console.log(queue.pop())