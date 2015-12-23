var MODB_VIEW = {};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');
        $('#screen').html('<div id="modbScreen" class="screen">MODULE B</div>');
    };

    // ********************************************
    this.erase = function (callback) {
        console.log('VIEW: Erasing');
        if (callback) { callback(); }
    };
}).apply(MODB_VIEW);

