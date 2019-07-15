/**
 * 
 * Ex 5
 * Create an mapper function using arrow symantics that returns an object having following
   attribute when operating on array
 * console.log([1,2,3].map(mapperFns)
 * [
 * 	{
		isEven: false,
		number: 1,
		squared: 1
		},
		{
		isEven: true,
		number: 2,
		squared: 4
		},
		{
		isEven: false,
		number: 3,
		squared: 9
		}
	]
 */

let mapperFns  = (params) => ({
    isEven: params % 2 === 0,
    number: params,
    squared: params * params
})


let result = [1,2,3].map(mapperFns);
console.log(result);