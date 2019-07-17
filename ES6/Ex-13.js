// Get X.A[2]

let x = { A: [ 't', 'e', 's', 't' ] };

// Solution using destructuring.
let { A : [ , , A_2 ] } = x;

console.log(A_2);
