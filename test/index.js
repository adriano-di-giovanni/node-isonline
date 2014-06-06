'use strict';

var
  assert = require('assert');

var
  isOnline = require('../lib/isOnline');

describe('Unit tests', function () {
  it('should do the job', function (done) {
    isOnline('localhost', function (error, response) {

      if (error) { return done(error); }

      assert.equal(response, true);
      done();
    });
  });
});