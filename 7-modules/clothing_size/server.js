var http = require('http');
var getSize = require('./index');
var url = require('url');

http.createServer(function(req, res) {
    res.write('hello there');
    if(req.url !== '/favicon.ico') {
        var getUrl = url.parse(req.url, true);

        if(getUrl.query.size) {
            getSize(getUrl.query.size);
        }

    }
    res.end();
}).listen(3000);

