class Stack {
constructor(){
    this.pancake = []
}
push(value){
    this.pancake.push(value)

}
pop(){
return this.pancake.pop()
}
}
const myStack = new Stack();


myStack.push("1")
myStack.push("2")
myStack.push("3")



console.log(myStack);



console.log(myStack.pop()) //////pop removes last item.... first in last out
console.log(myStack)////// showing the last item removed.


console.log(myStack.pop())////takes off the 2
console.log(myStack)
console.log(myStack.pop())/////takes off the 1
console.log(myStack)