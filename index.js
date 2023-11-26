const jsonServer= require('json-server');
const cors=require('cors');
const server = jsonServer.create();
const port = process.env.PORT||3002;
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'database.json'));
const middlewares = jsonServer.defaults();
server.use(cors());

server.get("/sse",(req, res)=>{
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection","keep-alive");
    setInterval(() => {
        const data = { mensaje: 'Hola desde el servidor.' };
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 5000);
});

server.use(router);
server.listen(port);