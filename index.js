var fs = require('fs'),
    http = require('http'),
    Q = require('q'),
    aws = require('aws-sdk'),
    events = require('events');

var eventEmitter = new events.EventEmitter();

var defaults = {
    loop: null,
    tick_rate: 5000,
    tick_main: 1000
  }

setup();
//mainLoop();


eventEmitter.on('trigger', mainLoop);

function setup() {
 // defaults.loop = setInterval(mainLoop, defaults.tick_main);
}

function mainLoop() {
  console.log('hello world');
}

setTimeout(function() {
  eventEmitter.emit('trigger');
}, 2000);
