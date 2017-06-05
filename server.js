//Requiring Node JS http Module
var http = require('http');


//Creating Node JS Web Server
http.createServer(function(req,res) {
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hell Yeahh!!!\n');
}).listen(8027,'127.0.0.1');


//Server Running at localhost
console.log('Web Server Running at http://127.0.0.1:8027/');