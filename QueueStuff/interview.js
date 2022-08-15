// Build a Queue class with the following behavior:

// (F)irst (I)n (F)irst (O)ut
// enqueue() adds a new item to the front of a list.
// dequeue() remove an item from the head and reassign head.
// peak() method that accesses the element at the front of the queue.
// length() return the length of the queue.
// isEmpty() true of false based off if the queue os empty or not empty



class Queue {

    constructor() {
      this.q = {}
      this.head = 0
      this.tail = 0
  
    }
  
    logQ() {
      console.log(this.q)
    }
  
    enqueue(item) {
      this.q[this.tail] = item
      this.tail++
  
    }
  
    dequeue() {
      const item = this.q[this.head];
      delete this.q[this.head]
      this.head++
      return item
    }
  
    peak() {
  
  
  
      return this.q[this.head]
  
    }
  
    length() {
      return this.tail - this.head
    }
  
    isEmpty() {
  
      return this.length === 0
  
  
  
    }
}
  const myClassInstance = new Queue
  myClassInstance.logQ();
  myClassInstance.enqueue(1);
  myClassInstance.enqueue(2);
  myClassInstance.enqueue(3);
  myClassInstance.dequeue();
  console.log(myClassInstance.peak());
  console.log(myClassInstance.isEmpty());
  myClassInstance.logQ()
  