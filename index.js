const { status } = require("express/lib/response")
const http= require("http")
const { url } = require("inspector")

const fs= require("fs")

const homePage= fs.readFileSync("index.html")
const contactPage= fs.readFileSync("contact.html")
const aboutPage= fs.readFileSync("about.html")


const server= http.createServer((request,response)=>{
    if(request.url==='/about'){
        response.setHeader('Content-Type', 'text/html'); 
        return  response.end(aboutPage)
        
    }
    else if(request.url==='/contact'){
        response.setHeader('Content-Type', 'text/html'); 
       return  response.end(contactPage)
    }
    else if(request.url==='/'){
        response.setHeader('Content-Type', 'text/html'); 
        return response.end(homePage)
        
    }
    else{
       response.writeHead(404)
       response.end(homePage)
    }
})
server.listen(8080)