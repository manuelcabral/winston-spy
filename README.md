# winston-spy

This tiny module defines a winston transport that can be used to test winston logging with spies


# Example

    var winston = require('winston');
    var sinon = require('sinon');
    var spyLogger = require('../src/winston-spy');
    
    var spy = sinon.spy();
    
    winston.remove(winston.transports.Console);
    winston.add(winston.transports.SpyLogger, { spy: spy });
    
    winston.log('info', testMessage, testMeta);
    assert(spy.calledOnce);
    assert(spy.calledWith('info', testMessage, testMeta));