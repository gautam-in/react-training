// 1. Way
var date1 = new Date ("2025-09-26");
const date = date1.getDate();
const year = date1.getFullYear();
const month = date1.getMonth();

// 2. Way

const { date, year, month } = "2025-09-26".split('-');

console.log(date, month, year);