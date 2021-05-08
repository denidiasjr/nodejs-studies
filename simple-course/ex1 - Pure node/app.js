
// Importa os modulos da aplicacao
var url = require('url');
var fs = require('fs');

// Renderiza a pagina passada por parametro
function render(path, response){
    fs.readFile(path,null,function(error,data){
        if (error){
            response.writeHead(404);
            response.write("Página não encontrada, brother");
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    
    // Mantem a requisicao e fornece uma resposta
    handleRequest: function(request, response){

        // Responde que o conteudo esta ok
        response.writeHead(200, {'Content-type': 'text/html'});

        // Captura url para fazer url rewriting
        var path = url.parse(request.url).pathname;
        switch (path){
            case '/':
                render('./index.html', response);
                break;
            case '/about':
                render('./about.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Pagina nao encontrada!!');
                response.end();
        }
    }
}