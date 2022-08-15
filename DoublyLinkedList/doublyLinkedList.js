class DoublyLinkedList{
    constructor(startData){
    this.data = startData
    this.prev = null
    this.next = null
}
push(new_data){
if(this.next){
this.next.push(new_data)

}else{
    let new_double = new DoublyLinkedList(new_data)
new_double.prev = this
this.next = new_double
}
}
pull(new_data){
    if(this.prev){
        console.log("haven't used the if")
        this.prev.pull(new_data)

    }
    else{
        console.log("but we are using else")
        let new_double = new DoublyLinkedList(new_data)
        new_double.next = this
        this.prev = new_double
    }
}

}



module.exports = DoublyLinkedList