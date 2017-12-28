var http = require('http');
var fs = require('fs');

function onResponse(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('./index.html',null,function(error,data){
        if (error){
            response.writeHead(404);
            response.write("Página não encontrada, brother");
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onResponse).listen(8000);