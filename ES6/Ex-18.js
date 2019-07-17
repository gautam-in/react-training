// Using Plain old js.

function myFn(callback) {
    setTimeout(callback, 1000);
}
  
function callback() {
    console.log('Call back is called after 1 sec');
}
  
console.log(myFn(callback))
  
// Using ES6 arrow function

const  myFn = callback => {
    setTimeout(callback, 1000);
 }
  
const  callback = () => {
    console.log('Call back is called after 1 sec');
}
  
console.log(myFn(callback))
  