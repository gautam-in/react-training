
//Write a function that returns all elements of array except first element

function returnAllElementsExceptFirst(arr) {
 
    arr.splice(0,1);
    return arr;
   }
   
console.log(returnAllElementsExceptFirst([1,2,3,4,5]));
  