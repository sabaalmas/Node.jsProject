const http= require("http")
const server= http.createServer((request,response)=>{
    console.log(request.url)
    console.log("hi there, ")
    response.end("hi there, server created")

})
server.listen(8000)