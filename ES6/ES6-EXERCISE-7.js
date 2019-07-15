
/**
 * EX 7
 * Write a function request which when called with parameter as shown below prints url and method value
 * 
 * request({url: 'http://www.google.com', method: 'GET' });
 * Prints value like
    http://www.google.com
    GET
 */

function request(params){
    const {url, method} = params;
    console.log(url, method);
}
request({url: 'http://www.google.com', method: 'GET' });