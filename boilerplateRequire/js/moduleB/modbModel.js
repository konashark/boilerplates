define([],
    function () {
        var value = 0;

        // ********************************************
        function get () {
            console.log("MODE: Get");
            return value;
        }

        // ********************************************
        function set (v) {
            console.log("MODE: Set");
            value = v;
        }

        // ********************************************
        // MODULE INTERFACE
        // ********************************************
        return {
            get:       get,
            set:       set
        };
    });

