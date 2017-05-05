var http = require('http');
var requestHandlers = require('./requestHandlers');

function start(route)
{
    function onRequest(request, response) {
        request.setEncoding('utf-8');
        route(request, response, handle);
    };

    http.createServer(onRequest).listen(8888);
    console.log('Server running at http://127.0.0.1:8888/');
};

var handle = {};
handle['/Rest'] = requestHandlers.Rest;

exports.start = start;
