// Write a simple destructuring expression to find the value of title, author firstname and publisher web url from the given object
// Change the variable name title to doc, firstname to name, and url to web

// Data
const meta = 
{ 
  title: 'Destructuring Assignment', 
  authors: [ { firstname: 'Craig', lastname: 'Buckler' } ],
  publisher: { name: 'SitePoint', url: 'http://www.sitepoint.com/' } 
}; 

// Destructuring 
const { title: doc, authors: [ {firstname: name}], publisher: { url: web} } = meta;

console.log(doc, name, web);

