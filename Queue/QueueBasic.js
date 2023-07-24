class Queue {
    constructor (){
        this.arr =[];
    }
    add(value){
        this.arr.unshift(value);
        return this.arr;
    }
    remove(){
        this.arr.pop();
        return this.arr;
    }
}
let q =new Queue();
console.log(q.add(5))
console.log(q.add(39))
console.log(q.add(63))
console.log(q.remove())