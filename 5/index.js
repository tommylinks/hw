var http = require('http');
var EventEmitter = require('events');
var myEmitter = new EventEmitter();

var date = new Date();

myEmitter.on('connection', function(err, req){
    console.log('Пользователь зашел ' + date);
});

myEmitter.on('close-connection', function(err, req){
    console.log('Пользователь ушел ' + date);
});



var server = http.createServer();

server.on('request', function(req, res) {

    // this short code for close /favicon get request
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }


    if(req.url !== '/exit') {
        myEmitter.emit('connection');

    } else if(req.url == '/exit') {
        myEmitter.emit('close-connection');
    }

    res.write('hello');
    res.end();
});

server.on('disconnect', function(){
    console.log('Пользователь ушел ' + date);
});

server.listen(4000);