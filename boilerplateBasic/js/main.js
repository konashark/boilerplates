console.log("Javascript is alive!");

window.addEventListener("load", initApp, false);

function initApp () {
    console.log("Initializing...");

    document.addEventListener("keydown", processKeyDown);
}

function processKeyDown(ev) {
    switch (ev.keyCode)
    {
        default:
            console.log("Pressed key: " + ev.keyCode);
    }
}
