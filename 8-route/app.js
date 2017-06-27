/**
 * Created by Shevchishen on 27.06.2017.
 */

var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, function(err, data){
        if(err) {
            response.writeHead(404);
            response.write('file not foud');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function(request, response) {
        // response.write(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/' :
                renderHTML('./index.html', response);
                break;
            case '/login' :
                renderHTML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not found');
                response.end();
        }


    }
};