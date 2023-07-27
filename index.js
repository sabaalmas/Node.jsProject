const { status } = require("express/lib/response")
const http= require("http")
const { url } = require("inspector")
const server= http.createServer((request,response)=>{
    if(request.url==='/about'){

         response.end("THE ABOUT PAGE...")
        
    }
    else if(request.url==='/contact'){
        response.end("THE CONTACT PAGE")
    }
    else if(request.url==='/'){
         response.end('the home page...')
        
    }
    else{
       response.writeHead(404)
       response.end("the page doesnt exist...")
    }
})
server.listen(8000)