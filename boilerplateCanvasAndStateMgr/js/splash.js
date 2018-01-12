var SPLASH = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'SPLASH';
    this.flags = {
        asyncExit: true
    };

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing ' + this.id);
        //UTILS.loadCss('./css/splash.css');
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering ' + this.id);
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting ' + this.id);
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log(this.id + ' event handler: ' + event.keyCode);

        if (event && event.customType) {
            switch (event.customType) {
                case 'MESSAGE':
                    break;
            }
            return;
        }

        if (!event.keyCode) {
            return;
        }

        var consumed = true;

        // Events are forwarded to us from the main start-up code.
        // Here is an example of various ways to handling them.

        switch (focusRegion) {
            default:
            log('No region is in focus!');
            consumed = false;
        }

        return consumed;
    };

}).apply(SPLASH);
