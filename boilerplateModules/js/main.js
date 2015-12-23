var MAIN = {};
console.log('App is alive!');
var G = G || {};

(function() {
    var log  = function(str) { console.log(this.id + ': ' + str);}.bind(this);
    this.id = 'MAIN';

    this.init = function () {
        log('Initializing...');

        document.addEventListener('keydown', function (event) {
            var consumed = defaultEventHandler(event);
            if (consumed) {
                event.preventDefault();
            }
        });

        G.eventMgr =  new EventBus();   // A tiny utility that allows us to send events within the app
        G.eventMgr.addListener(defaultEventHandler);
        G.eventMgr.dispatchEvent({ customType: 'Event Manager installed...' });

        G.stateManager = new StateManager;
        G.stateManager.newState(MODA);
        G.stateManager.newState(MODB);
        G.stateManager.transitionTo('MODULEA');   // Can pass object or string ID
    };

    // ********************************************
    // All events from the document or from the event bus are routed through this handler, which then
    // distributes the event to the current handler or handled here if not consumed
    // ********************************************
    var defaultEventHandler = function (event, payload) {

        // wasConsumed is a variable set by a controller to indicate if the key was consumed internally by the
        // controller. If it wasn't consume than delegate the general event handler to do something with the event
        var wasConsumed = false;
        var currentHandler = G.stateManager.getCurrentStateEventHandler();
        if (currentHandler) {
            wasConsumed = currentHandler(event, payload);
        }

        // Check any system events sent by this app
        if (event.customType) {
            console.log('Got custom event: ' + event.customType);
        }

        if (!wasConsumed) {
            switch (event.keyCode) {
                default:
                    console.log('Key ' + event.keyCode + ' was not handled');
                    break;
            }
        }

        return wasConsumed;

    }.bind(this);
}).apply(MAIN);


//******************************
window.addEventListener('load', MAIN.init, false);
//******************************
