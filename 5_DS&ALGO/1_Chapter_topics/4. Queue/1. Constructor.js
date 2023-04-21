class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue{
    constructor(value){
      const newNode = new Node(value);
      this.first = newNode;
      this.last = newNode;
      this.length = 1;
    }
}
const newQueue = new Queue(0);
console.log(newQueue);