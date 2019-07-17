//Create an mapper function using arrow symantics that returns an object 
//having following attribute when operating on array

//1. method

function mapperFns(value) {
   return {
      isEven: value % 2 === 0,
      number: value,
      squared: value * value
   }
  
}

var result = [1,2,3].map(mapperFns);
console.log(result);

//2. method using arrow function

var mapperFns = value => ({
   isEven: value % 2 === 0,
   number: value,
   squared: value * value
})

var result = [1,2,3].map(mapperFns);
console.log(result);
