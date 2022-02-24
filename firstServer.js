const httpServer = require('http').Server;
const fs = require('fs');
const util = require('util');
class FirstServer extends httpServer {
    constructor() {
        super();
        this.listen(3000);
        this.on('request', this.resInfo);
    }
     req;
    resInfo = (req, res) => {
        req = req;
        const infoStream = fs.createReadStream('info-file.txt');
        infoStream.pipe(res)
    }
}
module.exports = new FirstServer();