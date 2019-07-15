/**
 * EX 11
 * 1. Write a function that returns an array from a given string
 * wrap(“package”) // result should be [“package”]
 * 
 * 2. Write a function that takes an array of string and returns plain string
 * unwrap([“package”]) // result should be “package”
 * 
 */

function wrap(...params){
	let [y] = [params];
	console.log(y);
}
wrap('package');

function unwrap(params){
	let str = params.toString();
	console.log(str);
}

unwrap(['package']);