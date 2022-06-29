const jsonServer= require('json-server');
const cors=require('cors');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const port = process.env.PORT||3002;
const middlewares = jsonServer.defaults();
server.use(cors());
server.use(router);

server.listen(port);