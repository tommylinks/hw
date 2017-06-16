// var user = {
// 	getName: function(name) {
// 		console.log(name);
// 		return this;
// 	},
// 	getCode: function(code) {
// 		console.log(code);
// 		return this;
// 	}
// };

// user.getName('dima').getCode(123);









// var http = require('http');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();


// var server = http.createServer();

// server.on('test', function(request, response) {
// 	response.write('content here....');
// 	console.log('lol');
// 	response.end();

// 	console.log( 'method: ' + request.method);
// 	console.log('host: ' + request.headers.host);

// });



// server.listen({
//   port: 7000
// });


var http = require('http');
 

 
var server = http.createServer();
server.once('request', function(request, response) {
    response.writeHead(200);
		console.log( 'method: ' + request.method);
		console.log('host: ' + request.headers.host);
    response.write('hi');
    response.end();
});
 
server.listen(8000);
console.log('Browse to http://127.0.0.1:8000');

  	

myEmitter.on('listening', () => {
  console.log( 'Listen port: ' + server.address().port );
});

myEmitter.emit('listening');









