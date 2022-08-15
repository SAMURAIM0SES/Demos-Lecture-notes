const DoublyLinkedList = require("./doublyLinkedList")

const doubleList = new DoublyLinkedList(40)
doubleList.push(42)
doubleList.push(57)
doubleList.next.next.pull(25)

console.log(doubleList)