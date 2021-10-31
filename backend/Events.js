const EventEmitter = require('events')
const ee = new EventEmitter()

ee.on('message', function (text) {
    console.log(text)
})
ee.emit('message', 'hello world')
