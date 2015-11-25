define([],
    function () {
        console.log("MODULE-A is alive!");

        // ********************************************
        function init (params) {
            console.log("Initializing MODULE-A...");
        }

        // ********************************************
        function enter (currentState, userData) {
            console.log("Entering MODULE-A...");
        }

        // ********************************************
        function exit (callback) {
            console.log("Exiting MODULE-A...");
            // If you need a little time to do something like an exit animation, you can specify an asyncExit:true flag
            // in the module interface below. If set, this function will be passed a callback function. The state will
            // not transition until the callback is called by this function.
        }

        // ********************************************
        function eventHandler (event) {
            console.log("MODULE-A event handler: " + event.keyCode);
            return false;    // true = consumed, stop propagation
        }

        // ********************************************
        // MODULE INTERFACE
        // ********************************************
        return {
            id:             "MODULEA",
            init:           init,
            enter:          enter,
            exit:           exit,
            eventHandler:   eventHandler
        };
    });

