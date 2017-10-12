# Node-JS-Web-Server Setup

## Node JS

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.


## Project Description and Features

* Installing and Setting up Node.js
* Nodejs.org Code
* Handling http Requests
* NPM / Modules
* Serving HTML Files


## Project Sections

* Installing and Setting Up Node.js
* NPM and Basic HTTP Server
* Serving HTML Files

## Section 1 (Installing and Setting Up Node.js)

Install NodeJS from the official node.js Site: [nodejs.org](https://nodejs.org/en/)


## Section 2 (NPM and Basic HTTP Server)

### NPM 

Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
To dig deeper, visit [npmjs.com](https://www.npmjs.com/)


### Node JS Web Server 

Node JS Web Server helps in handling HTTP Requests and Serving HTML Files to the Browser.

### Setting Up HTTP Server

	```	const http = require('http');

		const hostname = '127.0.0.1';
		const port = 3000;

		const server = http.createServer((req, res) => {
		  res.statusCode = 200;
		  res.setHeader('Content-Type', 'text/plain');
		  res.end('Hello World\n');
		});

		server.listen(port, hostname, () => {
		  console.log(`Server running at http://${hostname}:${port}/`);
		});```

To dig deeper in NodeJS Web Server,visit this link: [Getting_Started_Guide](https://nodejs.org/en/docs/guides/getting-started-guide/)


## Section 3 (Serving HTML Files)

coming soon...



## License

MIT © [Nishi Gaba](https://github.com/NishiGaba)
