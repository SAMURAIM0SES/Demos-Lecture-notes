class Node {                 //first node is head. last is tail
    constructor(value){
        this.value = value //value of node
        this.next = null // points to next node in linked list
    }
}

class LinkedList{
    constructor() {
        this.head = null
        
        
    }
    add(value){
        const newNode = new Node(value)
        
        if(!this.head){
            this.head = newNode
        }else{
            let currNode = this.head
            while(currNode.next){
                currNode = currNode.next
            }

            currNode.next = newNode
        }
    }
    display(){
        let currNode = this.head
        while(currNode){
            console.log(currNode)
            currNode = currNode.next
        }
    }
}

const LL = new LinkedList();
LL.add("charmander")
LL.add("charmeleon")
LL.add("charizard")
LL.add("bulbasaur")
LL.add("ivysaur")
LL.add("venasuar")
LL.display()