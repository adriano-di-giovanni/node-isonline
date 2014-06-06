# node-isonline

A minimalistic remote machine online status checker module for Node.js

## Installation

```
npm install node-isonline
```

## Usage

```javascript

var
    assert = require('assert');

var
    isOnline = require('node-isonline');

isOnline('localhost', function (error, response) {
    if (error) throw error;

    assert.equal(response, true); // localhost's online
});
```