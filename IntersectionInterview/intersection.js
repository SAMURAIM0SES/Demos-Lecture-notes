let first = [1,4,9,10,11];
let second = [2,3,4,5,8,10];




const intersection = (arr1, arr2) =>{

    if (arr1 === 0 || arr2 === 0) return []
let set = []
    for(let i = 0; i< arr1.length ; i++){
        for(let k = 0; k < arr2.length; k++){
            if(arr1[i]===arr2[k]){
                set.push(arr1[i])
            }
        }
    }
return set
}

console.log(intersection(first, second))


////optimized solution below/////

function intersection2 (arrA, arrB) {
    const shared = [];
    arrA.forEach(elemA => {
      arrB.forEach(elemB => {
        if (elemA == elemB) {
          shared.push(elemA);
        }
      });
    });
    return shared;
  }
  console.log(intersection2(first, second))

  //////////steven example below////

  function interSet(arr1, arr2){
    let smaller = arr1.length < arr2.length ? arr1 : arr2
    let bigger = arr1.length > arr2.length ? arr1 : arr2
  
const mySet = new Set(smaller)

return bigger.filter(item => mySet.has(item))

}
console.log(interSet(first, second))