
/**
 * 
 * EX 10
 * Write a function that returns all elements of array except first element
 * 
 * 
 */

const filterDataArr = [10, 11, 12, 13, 14, 15];
function filterData(params){
 let [data, ...filterData] = params;
 console.log(filterData);
}
filterData(filterDataArr);
