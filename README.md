# winston-spy

This tiny module defines a winston transport that can be used to test winston logging with spies.

# Preparations

You do have to put the winston dependency into your `package.json`. winston-spy will not work correctly without this dependency in your `package.json`.
This is due to the module caching caveats of the nodejs module loading. winston-spy does not install a dependency to winston, this makes sure, that
winston-spy is using the same module as your application (see also Modules Loading from Node Modules folders).

Otherwise the used winston module would be another file and therefor it would not be the cached one used by your application and
therefor the SpyLogger could not be as easily used in your application.

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
