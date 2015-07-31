// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

var fs = require('fs');
var sprintf = require("sprintf-js").sprintf

module.exports = function(grunt) {

  grunt.registerTask('build-timestamp', 'Create a build_timestamp.txt file', function() {
    var d  = new Date();
    var ts = d.toString();
    grunt.log.writeln('build-timestamp: ' + ts);
    var outFile = fs.openSync('app/views/build_timestamp.txt', 'w+');
    fs.writeSync(outFile, '\n<!-- ' + ts + ' -->\n');
    fs.closeSync(outFile);
  });

};
