var http = require('http');

var server = http.createServer(function(request, response) {
	response.write('new posss');
	response.end();
});

server.listen(8000);
console.log('ready dssssss');





























// var http = require('http');

// var server = http.createServer(function(request, response) {
// 	response.write('hello world');
// 	response.end();
// });

// server.listen(8080);

// console.log('server working');
