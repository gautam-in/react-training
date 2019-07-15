 /**
 * 
 * EX 8
 * Create a function to Extract the value marked in red from the given object
 * 
 * const person = {
    first: 'Mohan',
    last: 'Singh',
    address: {
            lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
            city: 'Gurgaon',
            state: 'Haryana'
        }
    }
 * 
 *  
 */

const person = {
	first: 'Mohan',
	last: 'Singh',
	address: {
		lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
		city: 'Gurgaon',
		state: 'Haryana'
	}
}

function personDetails(params){
	let {address:{lines:[sector, lane]}} = params;
  console.log(lane);
}
personDetails(person);