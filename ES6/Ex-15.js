
// Create an array that contains the last four characters of another array

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9];

var arr2 = arr2.concat(arr1.slice(-4));

console.log(arr2);