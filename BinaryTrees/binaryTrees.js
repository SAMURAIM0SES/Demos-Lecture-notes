
// Write a function that receives a binary tree and returns an array of the sum of each branch, ordered from rightmost branch to leftmost branch. The sum of a branch is the sum of all node values within that branch.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(6);
  root.left.left.left = new BinaryTree(12);
  root.left.left.right = new BinaryTree(11);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(7);
  root.right.left = new BinaryTree(4);
  root.right.right = new BinaryTree(9);
  
  // Pass in `root` to the following function and write the logic to sum the branches right to left
  
  
  function sumBranches(root, sumArr=[], currSum = 0) {
   if(root === null)
     return
  
    currSum += root.value
    if(root.right === null && root.left === null){
      sumArr.push(currSum)
      return sumArr
    }
    sumBranches(root.right, sumArr, currSum)
    sumBranches(root.left, sumArr, currSum)
  
  
    return sumArr
  
  
    
  }
  
  
  
  console.log(sumBranches(root, sumArr=[], currSum = 0))
  
  