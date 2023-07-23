class Stack{
    constructor(){
      this.arr = [];
    }
    added(value) {
      this.arr.push(value);
      return this.arr;
    }
    remove() {
      this.arr.pop();
      return this.arr;
    }
  };
  
  let call = new Stack();
  console.log(call.added(3))
  console.log(call.added(6))
  console.log(call.remove())