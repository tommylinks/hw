
//BB CODE


var http = require('http');
var fs = require('fs');
var qs = require('querystring');


http.createServer(function (req, res) {
    fs.readFile('index.html', 'utf8', function(err, contents) {
        res.write(contents);


        if (req.method == 'POST') {
            var body = '';

            req.on('data', function (data) {
                body += data;

                // Too much POST data, kill the connection!
                // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                if (body.length > 1e6)
                    req.connection.destroy();
            });

            req.on('end', function () {
                var post = qs.parse(body);



                function check(text) {
                    text = text.replace(/<[^>]+>/g,'');
                    return text = text.replace('[b]', '<'+'b'+'>').replace('[/b]', '<'+'/'+'b'+'>');
                }

                res.write(check(post.html));


                res.end();
            });

        }




    });












}).listen(8080);

