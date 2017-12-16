const EventEmitter = require('events')

/* const event = new EventEmitter()
event.on('sleep', () => console.log('sleeping'))
event.on('getup', () => console.log('Getting up!'))

function startSession() {
    event.emit('getup');////event is triggered,function is called
}
function stopSession() {
    event.emit('sleep')
}
startSession()
stopSession(); */

class Training extends EventEmitter {
  constructor () {
    super()
    this.on('sleep', () => console.log('sleeping'))
    this.on('getup', () => console.log('Getting up!'))
  }
  startSession () {
    setTimeout(() => {
      this.emit('getup')
    }, 0)
  }
  stopSession () {
    setTimeout(() => {
      this.emit('sleep')
    }, 0)
  }
}
const training = new Training()
training.startSession()
training.stopSession()
