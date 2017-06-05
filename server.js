//Requiring Node JS http Module
var http	=	require('http');

//Requiring Modules url, path and fs (File System)
var url		=	require('url');
var path	=	require('path');
var fs		=	require('fs');

//Mime types
var mimeTypes = {
	"html"	: "text/html",
	"jpeg"	: "image/jpeg",
	"jpg"	: "image/jpg",
	"png"	: "image/png",
	"js"	: "text/javascript",
	"css"	: "text/css"
};

//Create Server
http.createServer(function(req,res){
	var uri			= url.parse(req.url).pathname;
	var fileName	= path.join(process.cwd(),uri);			//Process cwd(current working directory) with uri
	console.log('Loading',uri);
	var stats;

	//Looking for the Filename Exists or Not
	try {
		stats	= fs.lstatSync(fileName);
	} catch(e) {
		res.writeHead(404,{'Content-type': 'text/plain'});
		res.write('404 Not Found\n');
		res.end();
		return;
	}

	//Check if File or Directory ? 
	if(stats.isFile()) {
		var mimeType 	= mimeTypes[path.extname(fileName).split(".").reverse()[0]];
		res.writeHead(200,{'Content-type': mimeType});

		var fileStream	=	fs.createReadStream(fileName);
		fileStream.pipe(res);
	} else if(stats.isDirectory()) {
		//302 is For Re-Directing
		res.writeHead(302,{'Location' : 'index.html'});
		res.end();
	} else {
		res.writeHead(500,{'Content-type' : 'text/plain'});
		res.write('500 Internal Error\n');
		res.end();
	}
}).listen(8027,'127.0.0.1');


//Server Running at localhost
console.log('Web Server Running at http://127.0.0.1:8027/');