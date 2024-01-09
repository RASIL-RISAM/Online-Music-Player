var http= require("http");

function sample(request,response)
{
    response.writeHead(404,{"Content-Type":"text/html"});
    response.write("Hello everybody...");
    response.write("<h1>MY FIRST PAGE</h1>");
    response.end("<html><body>Home,URL was:"+request.url+"</body></html>")
    console.log("Request received");
}

var server=http.createServer(sample);
server.listen(3000);

console.log("Server running");
