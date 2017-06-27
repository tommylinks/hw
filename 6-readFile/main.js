/**
 * Created by Shevchishen on 21.06.2017.
 */

var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.on('request', function(req, res){

    fs.readFile('demo.txt', 'utf-8', function (err, data) {

        res.write(data);
        res.end();
    });

});

server.listen(5000);

