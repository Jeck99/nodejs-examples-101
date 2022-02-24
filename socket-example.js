const httpServer = require('http').createServer(requestHandler);
const ioSocket = require('socket.io')(httpServer);
const fs = require('fs');

httpServer.listen(3000);

requestHandler = (req, res) => {
    fs.readFile(__dirname + '/index.html',
        (err, data) => {
            if (err) {
                return res.end('Error loading index.html');
            }
            res.end(data);
        });
}
ioSocket.on('connection', (socket) => {
    socket.on('message', msg => {
        io.emit('message', msg);
    });
});

