// Description: This file is the entry point for the server. Importing http module and creating a server. http module is created by Node.js and it is used to create a server.
const http = require('http');

//variable that is used to store the port number. In this case local computer port number is 5000. Most of the time port number 5000 is used for servers and local host 3000 is used for client side.
const hostname = '127.0.0.1';
const port = 5000;

//creating a server using http module. The server is created using createServer method. The createServer method takes a function as an argument. The function takes two arguments request and response. The request object is used to get the request from the client and the response object is used to send the response to the client.

const server = http.createServer(function (req, res) {
    if (req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end('<h1>Hello World</h1>');
    }else if (req.method === "POST") {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end('<h1>Hello POST World</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Not Found');
     }
});

//The server is listening on the port number 5000 and the hostname is 5000. 
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});