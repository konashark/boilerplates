var MODA_VIEW = {};

(function() {
    // ********************************************
    this.draw = function (params) {
        console.log('VIEW: Drawing');
        $('#screen').html('<div id="modaScreen" class="screen">MODULE A</div>');
    };

    // ********************************************
    this.erase = function (callback) {
        console.log('VIEW: Erasing');
        if (callback) { callback(); }
    };
}).apply(MODA_VIEW);

