const htttp = require ("http");
const app = require ("./app");
const port = 3000;

const server = htttp.createServer(app);
server.listen(port);