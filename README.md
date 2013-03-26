# winston-spy

This tiny module defines a winston transport that can be used to test winston logging with spies

# Usage

Pass a function to the transport as the `spy` option. This function will be called whenever `winston.log()` is called.

# Example

    var winston = require('winston');
    var sinon = require('sinon');
    var spyLogger = require('winston-spy');
    
    var spy = sinon.spy();
    
    winston.remove(winston.transports.Console);
    winston.add(winston.transports.SpyLogger, { spy: spy });
    
    winston.log('info', testMessage, testMeta);
    assert(spy.calledOnce);
    assert(spy.calledWith('info', testMessage, testMeta));