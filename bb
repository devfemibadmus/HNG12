params

The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

req.url

There are built-in modules to easily split the query string into readable parts, such as the URL module.

var url = require('url');

var q = url.parse(req.url, true).query;
var txt = q.year + " " + q.month;

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


The Node.js file system module allows you to work with the file system on your computer.
var fs = require('fs');
CRUD operations

fs.readFile()
fs.appendFile()
fs.open()
fs.writeFile()
fs.unlink()//delete
fs.rename()
