// Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

// headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
// headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1
// mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1


// Hints
// Linked lists are just objects!
// You can iterate through the Linked Lists from head to tail and merge them along the way by inserting nodes from the second Linked List into the first Linked List.
// You'll need to manipulate three nodes at once at every step.
// Once they've decided on an approach, either iteration or recursion, you can elaborate on what those pointers might be if they get stuck.
// p1 = current node in the first linked list
// p2 = current node in the second linked list
// prev or temp (depending on how you want to tackle this) = previous node from first linked list, or
// a temporary variable to hold the reference to a node so you don't lose it.

class LinkedList {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  function createList(nums) {
    let head = new LinkedList(nums[0]);
    let origHead = head;
    for (let i = 1; i < nums.length; i++) {
      head.next = new LinkedList(nums[i]);
      head = head.next;
    }
    return origHead;
  }
  
  let headone = createList([2, 6, 7, 8]);
  let headtwo = createList([1, 3, 4, 5, 9, 10]);
  
  console.dir(headone, {depth:null})
  console.dir(headtwo, {depth:null})
  
  //give for testing ^

//   Solution 1: Iterative

// Time Complexity: O(n+m)        Space complexity: 0(1)
// n = length of list 1
// m = length of list 2
function mergeTwoLists(headone, headtwo) {
    // If either head is null, determine which one isn't return that head.
    if (headone === null || headtwo === null)
      return headone === null ? headtwo : headone
  
    // Determine which head holds the smallest value and set p1 
    // to start at the smaller head.
    // This will be the linked list we build from.
    let p1 = headone.value <= headtwo.value ? headone : headtwo
    let p2 = headone === p1 ? headtwo : headone
    let head = p1
  
    while (p1.next !== null && p2 !== null) {
      // if p1.next is less than p2 we can just move ahead one spot with p1
      if (p1.next.value <= p2.value) {
        p1 = p1.next
      }
      // if p2 is less than p1.next we'll need to slot p2
      // in between p1 and p1.next without losing the reference to p1.next
      else {
        let temp = p1.next
        p1.next = p2
        p2 = temp
      }
    }
  
    p1.next = p2
    return head
  }


//   Solution 2: Recursive
// Time Complexity: O(n+m)        Space complexity: 0(n+m)
// n = length of list 1
// m = length of list 2
function mergeLinkedLists(headOne, headTwo) {
    recursiveMerge(headOne, headTwo, null);
    // Determine which head holds the list after 
    // recursiveMerge returns above.
    return headOne.value < headTwo.value ? headOne : headTwo;
  }
  ???
  function recursiveMerge(p1, p2, p1Prev) {
  //if p1 is null we've run out of links to check.
  //set p1Prev.next to the rest of p2 and return
    if (p1 === null) {
      p1Prev.next = p2;
      return;
    }
    //same as above, but just return the rest of the list
    if (p2 === null) return;
  
  ???  if (p1.value < p2.value) {
      recursiveMerge(p1.next, p2, p1);
    } else {
      if (p1Prev !== null) p1Prev.next = p2;
      const newP2 = p2.next;
      p2.next = p1;
      recursiveMerge(p1, newP2, p2);
    }
  }

//   Solution 3: Recursive
// Time Complexity: O(n+m)        Space complexity: 0(n+m)
// n = length of list 1
// m = length of list 2
function mergeLists(headone, headtwo) {
    // If either head is null, determine which one isn't and
    // return that head.
    if (headone === null || headtwo === null) {
      return headone === null ? headtwo : headone
    }
  
    // Determine which head holds the smallest value and set 
    // p1 to start at the smaller head.
    // This will be the linked list we build from.
    let p1 = headone.val <= headtwo.val ? headone : headtwo
    let p2 = p1 === headone ? headtwo : headone
    const head = p1
  
    head.next = mergeLists(p1.next, p2)
  
    return head
  }