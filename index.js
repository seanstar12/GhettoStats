var fs = require('fs'),
    http = require('http'),
    Q = require('q'),
    aws = require('aws-sdk'),
    events = require('events');

var defaults = {
    loop: null,
    tick_rate: 5000,
    tick_main: 1000
  }

_scan()
// .then(_getMetrics)


function _getMetrics() {
//getting metrics somehow and someway
}

function _scan() {
var modexists = fs.existsSync(__dirname + '/modules/test');
  if (modexists) {
      console.log('exists');
} else {
     console.log('No module, creating sample');
     fs.createReadStream(__dirname + '/modules/test.json').pipe(fs.createWriteStream(__dirname + '/modules/test'));
}
//var mod = require('./modules/test');
}

function mainLoop() {
//makes alarm groups, sorts modules etc.
}

