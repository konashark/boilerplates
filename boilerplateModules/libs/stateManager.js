// StateManager - a simple, but effective Javascript State Management library
// Author: Jeff Sprague

// State Manager Object
// *****************************************************
var StateManager = function() {
    this.stateList = [];
    this.currentState = undefined;
    this.historyStack = [];
    this.MAX_HISTORIES = 16;
};

//*****************************************************
StateManager.prototype.newState = function(params){
    // params:
    //      id              - text name for the state
    //      eventHandler    - eventHandler for state
    //      enter           - callback function
    //      exit            - callback function

    var state = {};
    state.id            = params.id || "UNDEFINED";
    state.enter         = params.enter || function() { console.log("'enter' not implemented"); };
    state.exit          = params.exit || function() { console.log("'exit' not implemented"); };
    state.asyncExit     = params.asyncExit;
    state.eventHandler  = params.eventHandler || function() { return false; };

    this.stateList.push(state);
};

//*****************************************************
StateManager.prototype.unregisterState = function(id){

    if (id === this.currentState.id) {
        console.log("Uh oh. Deleting the current state!");
        this.currentState = undefined;
    }

    for (var node = 0; node < this.stateList.length; node++) {
        if (this.stateList[node].id === id) {
            this.stateList.splice(node, 1);
        }
    }
};

//*****************************************************
StateManager.prototype.findStateById = function(id){
    for (var node = 0; node < this.stateList.length; node++) {
        if (this.stateList[node].id === id) {
            return this.stateList[node];
        }
    }
    return null;
};

//*****************************************************
StateManager.prototype.getCurrentStateNode = function(){
    return this.currentState;
};

//*****************************************************
StateManager.prototype.getCurrentStateEventHandler = function() {
    return this.currentState ? this.currentState.eventHandler : null;
};

//*****************************************************
StateManager.prototype.getCurrentState = function(){
    return this.currentState ? this.currentState.id : null;
};

//*****************************************************
StateManager.prototype.transitionTo = function(id, stateData){
    if (id) {
        var state = this.findStateById(id);

        if (state){
            if (this.currentState && state.id === this.currentState.id) {
                console.log("Uh oh? Requested state is already active!");
            }

            this.privateDoTransition(this.currentState, state, stateData);

            this.historyStack.unshift(state);
            if (this.historyStack.length > this.MAX_HISTORIES) {
                this.historyStack.pop();
            }
        }
    }
    return state;
};

//*****************************************************
StateManager.prototype.transitionBack = function(){
    var oldState = this.currentState;
    this.historyStack.shift();
    var newState = this.historyStack[0];

    if (oldState && newState) {
        this.privateDoTransition(oldState, newState);
    }
    return this.currentState ? this.currentState.id : undefined;
};

//*****************************************************
StateManager.prototype.privateDoTransition = function(oldState, newState, stateData){
    var self = this;

    // Tell old state that it's going away
    if (oldState && oldState.exit) {

        if (oldState.asyncExit) {
            oldState.exit(function() {
                newState.enter(self.currentState ? self.currentState.id : "UNDEFINED", stateData);
                self.currentState = newState;
                console.log("CURRENT STATE: " + newState.id);
            }, oldState.id, newState.id);    // old state, new state
        } else {
            returnData = oldState.exit(oldState.id, newState.id);
            newState.enter(self.currentState ? self.currentState.id : "UNDEFINED", stateData);
            self.currentState = newState;
            console.log("CURRENT STATE: " + newState.id);
        }

    } else {
        newState.enter(self.currentState ? self.currentState.id : "UNDEFINED", stateData);
        self.currentState = newState;
        console.log("CURRENT STATE: " + newState.id);
    }
};
