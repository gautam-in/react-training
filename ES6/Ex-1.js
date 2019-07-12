// • Create a function that list out all the number divisible by 3 from given array of numbers const 
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//1. using pure javascript
function ListNumbersDivByThree(arr) {
  
    return arr.filter(function (value) {
      return !(value % 3);
  });

} 
//console.log(ListNumbersDivByThree(array));


// 2. using arrow function

function ListNumbersDivByThree(arr) {

  return arr.filter( value =>  !(value % 3));
  
}
  
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
console.log(ListNumbersDivByThree(array));

