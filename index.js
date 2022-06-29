const jsonServer= require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const port = process.env.PORT||3002;
const middlewares = jsonServer.defaults();
server.use(router);

server.listen(port);