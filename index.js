var fs = require('fs'),
    http = require('http'),
    Q = require('q'),
    aws = require('aws-sdk');

setup();

function setup() {
var modules = fs.readdirSync(__dirname + '/modules');
  if (modules.length === 0) {
    console.log('No Modules, making sample');
    fs.createReadStream(__dirname + '/test.json').pipe(fs.createWriteStream(__dirname + '/modules/sample.json'));
    setup();
} else {
    modules.sort();
    console.log(modules);
  };
};
