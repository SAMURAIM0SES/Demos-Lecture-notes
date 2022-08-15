//Write a function reverseList that takes in a LinkedList instance and returns a reversed list, in-place. The head property of the returned list should strictly equal the head property of the input list.
class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head = null;

  addToHead(value) {
    if (!this.head) {
      this.head = new LLNode(value);
      return this;
    }

    const newNode = new LLNode(value, this.head);
    this.head = newNode;
    return this;
  }
}


const list = new LinkedList();

list
  .addToHead(1)
  .addToHead(2)
  .addToHead(3)
  .addToHead(4)
  .addToHead(5)
  .addToHead(6);
// yields a list structured: 6 -> 5 -> 4 -> 3 -> 2 -> 1

reverseList(list.head)
console.dir(list, { depth: null });
// yields a list structures: 1 -> 2 -> 3 -> 4 -> 5 -> 6



//ITERATIVE
function reverseLLIterative(head) {
    let curr = head,
      previous = null,
      next = curr.next;
  
    while (curr) {
      curr.next = previous;
      previous = curr;
      curr = next;
      // guard against the last node's next == null value
      if (curr) next = curr.next;
    }
  
    head = previous;
    return head;
  }
  
  list.head = reverseListIterative(list.head);
  console.dir(list, { depth: null });
  // should yield a list structured: 1 -> 2 -> 3 -> 4 -> 5 -> 6


  //RECURSIVE
  function reverseLLRecursive(head) {
    if (!head || !head.next) {
      return head;
    }
  
    const rest = reverseLLRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
  }
  
  list.head = reverseLLRecursive(list.head);
  console.dir(list, { depth: null });
  // should yield a list structured: 1 -> 2 -> 3 -> 4 -> 5 -> 6