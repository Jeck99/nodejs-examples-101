const EventEmitter = require('events');
class MyEventClass extends EventEmitter {
    constructor() {
        super();
        this.onPrintNow();
    }
    onPrintNow() {
        this.on('printNow', (dataItem) => {
            console.log('printNow event: ', dataItem);
        })
    }
    emitPrintNow(data) {
        this.emit('printNow', data);
    }
}
module.exports =  new MyEventClass();

// index.js
const myEvent = require('./MyEventClass.js');
myEvent.emitPrintNow('Hello World');