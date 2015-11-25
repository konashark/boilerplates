define(['js/moduleB/modbView', 'js/moduleB/modbModel'],
    function (VIEW, MODEL) {
        console.log("MODULE-B is alive!");

        // ********************************************
        function init (params) {
            console.log("Initializing MODULE-B...");
        }

        // ********************************************
        function enter (currentState, userData) {
            console.log("Entering MODULE-B...");
            VIEW.draw();
        }

        // ********************************************
        function exit (callback) {
            console.log("Exiting MODULE-B...");
            // If you need a little time to do something like an exit animation, you can specify an asyncExit:true flag
            // in the module interface below. If set, this function will be passed a callback function. The state will
            // not transition until the callback is called by this function.
        }

        // ********************************************
        function eventHandler (event) {
            console.log("MODULE-B event handler: " + event.keyCode);
            return falsec;    // true = consumed, stop propagation
        }

        // ********************************************
        // MODULE INTERFACE
        // ********************************************
        return {
            id:             "MODULEB",
            init:           init,
            enter:          enter,
            exit:           exit,
            eventHandler:   eventHandler
        };
    });

