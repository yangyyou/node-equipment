'use strict';

const connect = require('..');
const assert = require('assert').strict;

assert.strictEqual(connect(), 'Hello from connect');
console.info('connect tests passed');
