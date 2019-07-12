// Write a function that calculates the prices after tax calculation for each price element in the prices array.
//  

// As a sum
var result = prices.reduce((acc, val) => { 
        return (acc + val * 0.07);
},0).toFixed(2);

// As a result array
var result1 = prices.map((acc, val) => { 
        return (acc + val * 0.07);
});


var prices = [1.1, 2.32, 3.68, 4.9];
console.log(result1);