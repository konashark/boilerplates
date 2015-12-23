var MODA = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'MODULEA';
    this.flags = {};

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing MODULE-A...');
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering MODULE-A...');
        MODA_VIEW.draw();
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting MODULE-A...');
        // If you need a little time to do something like an exit animation, you can specify an asyncExit:true flag
        // in the module flags above. If set, this function will be passed a callback function. The state will
        // not transition until the callback is called by this function.
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log('MODULE-A event handler: ' + event.keyCode);
        if (event.keyCode) {
            switch (event.keyCode) {
                case KEYMAP.ENTER:
                    G.stateManager.transitionTo('MODULEB');
                    break;
            }
        }
        return false;    // true = consumed, stop propagation
    }
}).apply(MODA);

