

 //Create an mapper function using arrow symantics that returns an object 
 //having following attribute when operating on array


var result = [1,2,3].map(mapperFns);

function mapperFns(value) {
   
   const obj = {};
   
   if(value % 2 === 0) {  
      obj.isEven = true;
      obj.number = value;
      obj.squared = value * value;
   
   }
   else {
      obj.isEven = false;
      obj.number = value;
      obj.squared = value * value;
   }
   
   return obj;
}

console.log(result);