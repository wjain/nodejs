var querystring = require('querystring');
var url = require('url');

function Rest(request, response){
    var requestData = "";
    request.addListener("data", function (postDataChunk) {
        requestData += postDataChunk;
    });

    request.addListener("end", function () {
        var params = querystring.parse(requestData);
        Object.assign(params, url.parse(request.url, true).query);
        for (var key in params) {
            console.log(key + " : " + params[key]);
        }
    });

    console.log("Handle Rest request.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Handle Rest");
    response.end();
}

exports.Rest = Rest;
