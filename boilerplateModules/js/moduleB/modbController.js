var MODB = {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);

    this.id = 'MODULEB';
    this.flags = {};

    log('Loaded');

    // ********************************************
    this.init = function (params) {
        log('Initializing MODULE-B...');
    };

    // ********************************************
    this.enter = function (currentState, userData) {
        log('Entering MODULE-B...');
        MODB_VIEW.draw();
    };

    // ********************************************
    this.exit = function (callback) {
        log('Exiting MODULE-B...');
        // If you need a little time to do something like an exit animation, you can specify an asyncExit:true flag
        // in the module flags above. If set, this function will be passed a callback function. The state will
        // not transition until the callback is called by this function.
    };

    // ********************************************
    this.eventHandler = function (event) {
        console.log('MODULE-B event handler: ' + event.keyCode);
        switch (event.keyCode) {
            case KEYMAP.ENTER:
                G.stateManager.transitionTo('MODULEA');
                break;
        }
        return false;    // true = consumed, stop propagation
    }
}).apply(MODB);

