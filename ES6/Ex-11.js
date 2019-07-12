// Using old js split method.

function wrap(str) {
 
    return str.split();
 }
 
 function unwrap(str) {
 
    return str.join();
 }


 // using ES6 Destructuring

 function unwrap(str) {
   const [result] = str;
   return result;
}

 
 console.log(wrap('Hello'));
 
 console.log(unwrap(["package"]));
