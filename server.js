/**
 * Created by ZenderR on 9/21/2015.
 */
var http = require("http");

var visits = 0;
http.createServer( function(request, response) {
    console.log('New connection');
    visits++;

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello\n');
    response.write('We have had '+visits+' visits');
    response.end();

}).listen(8888);

console.log('Server Started..');