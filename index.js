const http= require("http")
const server= http.createServer((request,response)=>{
    console.log(request.url)
    response.end("The server has been created .... ")
})
server.listen(8000)