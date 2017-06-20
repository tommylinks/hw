
var http = require('http');
var https = require('https');
var EventEmitter = require('events');
var myEmitter = new EventEmitter();
var url = require('url');
var api = "";


https.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function(info) {
    info.setEncoding('utf8');
    info.on('data', function (body) {

        var apiObj = JSON.parse(body);
        for (var i = 0; i < apiObj.length; i++) {
            api += apiObj[i].ccy + " : " + apiObj[i].buy + "\n";
        }
        return api;

    });

});

var server = http.createServer();

server.on('request', function(req, res) {

    var parseUrl = url.parse(req.url, true);

    if(parseUrl.pathname == '/about') {
        console.log('URL: ' + req.url);
        console.log('Method: ' + req.method);
        console.log('Status: ' + res.statusCode);
    } else if (parseUrl.pathname == '/stop') {
        server.close();
        console.log('server stoped');
    } else if (parseUrl.pathname == '/currency') {
        res.write(api);
    }

    res.end();
});

server.listen(3000);

myEmitter.on('listening', function(){
  console.log( 'Listen port: ' + server.address().port );
});
myEmitter.emit('listening');










