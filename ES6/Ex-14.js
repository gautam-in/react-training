// Pass any object of type config to function which console value of obj.

let config = {
    chartType : 0,
    bullColor : 'green',
    bearColor : 'red',
    days      : 30
};

// Using ES6 function arguments object destructuring.
function drawChart( data, { 
    chartType = 0, 
    bullColor = 'green', 
    bearColor = 'red', 
    days = 30 } ) {
    console.log( chartType, bullColor, bearColor, days );
};

// First call without any object param.
drawChart( [], {} );

// Second call using config object as param.
drawChart( [], { chartType: 1, days: 60 } );
