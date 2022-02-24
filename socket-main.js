const { count } = require('console');

const NetServer = require('net').Server;
class SocketServer extends NetServer {
    constructor() {
        super();
        this.listen('8080');
        this.on('connection', this.connectionHandler);
    }
    connectionHandler(socketParam) {
        console.log(`Someone connected!`);
        this.socket = socketParam;
        this.repeater();
    }
    repeater() {
        let counter = 0;
        setInterval(() => { 
            this.socket.write(`Hello : ${counter++}`);
        }, 3000);
    }
}
module.exports = new SocketServer();
