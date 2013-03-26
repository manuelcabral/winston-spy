var assert = require('assert');
var winston = require('winston');
var sinon = require('sinon');
var spyLogger = require('../src/winston-spy');

var spy = sinon.spy();

winston.remove(winston.transports.Console);
winston.add(spyLogger, { spy: spy });

var testMessage = 'Hello World';
var testMeta = { hello: 'world' };

describe('sinonjsLogger', function() {

  it('should call spy', function() {
    winston.log('info', testMessage, testMeta);
    assert(spy.calledOnce);
    assert(spy.calledWith('info', testMessage, testMeta));
  });

  it('should be removable', function() {
    winston.remove(spyLogger);
    winston.log('info', testMessage, testMeta);
    assert(spy.calledOnce);
  });
});
