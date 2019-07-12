
//Write a function that returns all elements of array except first element

function returnAllElementsExceptFirst(arr) {
 
    arr.splice(0,1);
    
    return arr;
   }

   //using ES6
   
function returnAllElementsExceptFirst(arr) {
 
    const [first, ...rest] = arr;
    console.log(first);
    return rest;
   }
   
console.log(returnAllElementsExceptFirst([1,2,3,4,5]));
  