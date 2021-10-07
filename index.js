const app = require('./src/app');
const http = require('http');
const dotenv = require("dotenv").config();

const port = process.env.PORT || '3000';

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server is running on  :>> ', port);
});

module.exports = server;
