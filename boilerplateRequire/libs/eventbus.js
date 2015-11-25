EventBus = function() {
    this.eventListeners = [];
};

EventBus.prototype.addListener = function(listener) {
    if(typeof listener !== 'function') {
        console.log("EVENT BUS: Invalid listener!");
        return;
    }
    this.eventListeners.push(listener);
};

EventBus.prototype.removeListener = function(listener) {
    var index = this.eventListeners.indexOf(listener);
    if(index !== -1) {
        this.eventListeners.splice(index, 1);
    }
};

EventBus.prototype.dispatchEvent = function(event, payload) {
    var eventListeners = this.eventListeners;
    setTimeout(function() {
        var i;
        for (i = 0; i < eventListeners.length; i++) {
            eventListeners[i](event, payload);
        }
    }, 0);
};
