


/**
 * 
 * EX 4
 * Write a function that calculates the prices after tax calculation for each price element in the
   prices array
    
     var prices = [1.1, 2.32, 3.68, 4.9];
        result should be pricesWithTax
        Assume taxRate to be 0.07

 */
const prices = [1.1, 2.32, 3.68, 4.9];

function calcTotalPrice(prices, tax=0.07){
	const totalPrice = prices.map(item => item + (item*tax));
	console.log(totalPrice);
}
calcTotalPrice(prices);


