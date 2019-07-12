
//Write a function that returns all elements of array except first element

//1. using pure javascript
function returnAllElementsExceptFirst(arr) {
 
    arr.splice(0,1);
    
    return arr;
   }

//2. using destructuring
   
function returnAllElementsExceptFirst(arr) {
 
    const [first, ...rest] = arr;
    console.log(first);
    return rest;
   }
   
console.log(returnAllElementsExceptFirst([1,2,3,4,5]));
  