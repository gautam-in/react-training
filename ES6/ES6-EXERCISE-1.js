/** 
 * 
 * Ex 1
 * 
 * Create a function that list out all the number divisible by 3 from given array of numbers
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

 * **/

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function listData(data){
  const divsibleNember =[];
	data.map((item) => {
		if(item%3 === 0){
		  divsibleNember.push(item);
		}
  })
  return divsibleNember;
}
const listDataNumber = listData(data);
console.log(listDataNumber);
