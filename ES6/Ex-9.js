
let text = ''; 
let nodes = 'SEO basics How to use headings on your site';
// Write code here 

// Using ES6 for...of...loop
for ( let node of nodes.split(' ') ) { 
    text+= node[0];
}; 

console.log( text ); 