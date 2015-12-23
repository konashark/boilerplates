var MODB_MODEL = {};

(function() {
    var value = 0;

    // ********************************************
    this.get = function () {
        return value;
    };

    // ********************************************
    this.set = function (v) {
        value = v;
    };
}).apply(MODB_MODEL);

