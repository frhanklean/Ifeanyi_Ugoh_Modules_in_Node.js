// ...................... EVENTS MODULE .........................

/*
DESCRIPTION:    The events module provides an event emitter that allows you to create and emit events
                and subscribe to those events. Here's an example of using the events module to create
                and emit an event:
*/

// EXAMPLE:

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');


















