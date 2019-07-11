// Write a function that calculates the prices after tax calculation for each price element in the prices array.
// var prices = [1.1, 2.32, 3.68, 4.9]; 


var prices = [1.1, 2.32, 3.68, 4.9]; 

var result = prices.reduce((acc, val) => { 
        return (acc + val + 0.07);
},0).toFixed(2);

console.log(prices);