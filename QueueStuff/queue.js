class Queue {
constructor(){
    this.element= {}
    this.head = 0
    this.tail = 0
}
enqueue(value){///adds element to object
this.element[this.tail]= value
this.tail++
}
dequeue(){/// removes element from object
    const item = this.element[this.head];
    delete this.element[this.head]
    this.head++
    return item

}
}


const MyQueue = new Queue()


MyQueue.enqueue("Preston");
MyQueue.enqueue("Alina");
MyQueue.enqueue("Gabriel");

console.log(MyQueue)

console.log(MyQueue.dequeue())
console.log(MyQueue)
console.log(MyQueue.dequeue())
console.log(MyQueue)
console.log(MyQueue.dequeue())
console.log(MyQueue)