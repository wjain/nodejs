var url = require('url');

function route(request, response, handle) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname);
    if (typeof handle[pathname] == 'function') {
        handle[pathname](request, response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
