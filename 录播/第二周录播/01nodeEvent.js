
const event = require("event")
const eventEmitter = new event.eventEmitter()
eventEmitter.on("event1",function(){
    console.log('event1 touched')
})
eventEmitter.emit('event1')