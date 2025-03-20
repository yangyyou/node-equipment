'use strict';

const nodeDev = require('..');
const assert = require('assert').strict;

assert.strictEqual(nodeDev(), 'Hello from nodeDev');
console.info('nodeDev tests passed');
