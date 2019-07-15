/** 
 * 
 * Ex 2
 * 
 * Write a simple destructuring expression to find the value of title, author firstname and publisher web url from
 * the given object
 * Change the variable name title to doc, firstname to name, and url to web
const meta = {
    title: 'Destructuring Assignment',
    authors: [ { firstname: 'Craig', lastname: 'Buckler' } ],
    publisher: {
        name: 'SitePoint',
        url: 'http://www.sitepoint.com/'
    }
};

 * **/

const meta = {
    title: 'Destructuring Assignment',
    authors: [ 
        { firstname: 'Craig', lastname: 'Buckler' } 
    ],
    publisher: {
        name: 'SitePoint',
        url: 'http://www.sitepoint.com/'
    }
};

const {title, authors:[{firstname}], publisher: {url}} = meta;
console.log('Title :',title,  'Author Name :', firstname,  'URL link :',url);