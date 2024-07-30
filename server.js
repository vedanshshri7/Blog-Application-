const  http = require('http')
const port = 3000;
const app = require('../Blog Application/app')


const server = http.createServer(app)
server.listen(port,()=>console.log("app is running on port "+port))
