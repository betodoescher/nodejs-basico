var http = require('http')
var handle = require('./handle')

var events = require('events')
var emiter = new events.EventEmitter();

require('console-log-hello-world')

emiter.on('say12', say)
function say() {
    console.log('Im saying...');
    
}

emiter.emit('say12')


var server = http.createServer(handle.fn)

server.listen(3000, function(){
    console.log('Server is listening at port 3000');
    
})