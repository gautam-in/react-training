// Write a function using destructuring syntax to extract the value of title,
// author for each book element in a books array

// Input data

const books = [
     { title: 'Full Stack JavaScript', author: 'Colin Ihrig and Adam Bretz', url: 'http://www.sitepoint.com/store/full-stack-javascript/' },
     { title: 'JavaScript: Novice to Ninja', author: 'Darren Jones', url: 'http://www.sitepoint.com/store/leaern-javascript/' },
     { title: 'Jump Start CSS', author: 'Louis Lazaris', url: 'http://www.sitepoint.com/store/jump-start-css/' },];

// Destructuring
var [arr1, arr2, arr3] = books.map(book => {
     return [book.title, book.author];
})

console.log(arr1, arr2, arr3);
