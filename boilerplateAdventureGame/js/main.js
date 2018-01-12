console.log("Javascript is alive!");

// Global Variables
var quit = false;
var locations = [];
var screen;

locations['cabin'] = {
    desc: "You are in a dark cabin. There is nothing of interest here. There is a door on the west wall.",
    north: undefined,
    south: undefined,
    east: undefined,
    west: "path"
};

locations['path'] = {
    desc: "You are on a forest path that leads North and South. There is a cabin to the East.",
    north: undefined,
    south: undefined,
    east: "cabin",
    west: undefined
};

var currentLocation = locations['cabin'];

window.addEventListener("load", initApp, false);

//*********************************************
function initApp () {
    console.log("Initializing...");
    screen = document.getElementById("screen");

    //document.addEventListener("keydown", processKeyDown);
    screen.onkeyup = processKeyDown;
    print('Initializing...\n');
    print('Welcome to Adventure!\n');
    print('Commands:\n');
    print('n: move north\n');
    print('s: move south\n');
    print('e: move east\n');
    print('w: move west\n');
    print('q: quit\n');
    print('');
    print(currentLocation.desc);
    print('Your command: ');

}

//*********************************************
function processKeyDown(ev) {
    console.log("Pressed key: " + ev.keyCode);
    var key = ev.keyCode;
    var direction;

    if (key === 78) {   // North
        direction = "north";
    }

    if (key === 83) {   // South
        direction = "south";
    }

    if (key === 69) {   // East
        direction = "east";
    }

    if (key === 87) {   // West
        direction = "west";
    }

    var newLocation = currentLocation[direction];

    if (newLocation) {
        currentLocation = locations[newLocation];
        print("\n" + currentLocation.desc);
    } else {
        print("\nYou can't go that way!\n");
    }

    print('\n>Your command: ');
}

//*********************************************
function print (str, noreturn) {
    screen.value += str;
}

