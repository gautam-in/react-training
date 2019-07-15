/**
 * 
 * EX 13
 * Create one destructuring expression that declares exactly one variable to retrieve x.A[2]
	let x = { A: [ ' t ' , ' e ' , ' s ' , ' t ' ]

 */
let val= { A: ['t', 'e', 's','t']};
function retrieveData(params){
	let {A:[first,second]} = params;
	console.log(second);
}
retrieveData(val);
