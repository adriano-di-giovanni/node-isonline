'use strict';

(function (spawn) {

  function isOnline(host, callback) {
    var
      child = spawn('ping', [ '-q', '-c', 3, host ]);

    child.on('error', function (error) {
      callback(error);
    });

    child.on('exit', function (code) {
      callback(null, code === 0);
    });
  }

  module.exports = isOnline;

}(require('child_process').spawn));