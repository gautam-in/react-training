//  Write a function request which when called with parameter as shown below prints url and method value


// using arguments as object destructuring.
function request( { url, method } ) {

  console.log(url);
  console.log(method);
}
  
request({url: 'http://www.google.com', method: 'GET' });
  