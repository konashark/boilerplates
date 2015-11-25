console.log("Javascript is alive!");

window.addEventListener("load", initApp, false);

var KEYSTATE = [];
var KEY = {LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, ENTER: 13, SPACE: 32, X: 88, Z: 90 };
var ctx;    // Main canvas context

/*************************************************/
function initApp () {
    console.log("Initializing...");

    // Initialize the amazing JGL and create a new sprite list
    jgl = new Jgl;

    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,640,480);
    ctx.font = "40px _sans";
    ctx.fillStyle = "#00AA00";

    document.addEventListener("keydown", processKeyDown);
    document.addEventListener("keyup", processKeyUp);

    loadResources();

    gameLoop();
}

/*************************************************/
function processKeyDown(ev) {
    KEYSTATE[ev.keyCode] = true;

    switch (ev.keyCode)
    {
        case KEY.SPACE:
            break;

        default:
            console.log("Pressed key: " + ev.keyCode);
    }
}

/*************************************************/
function processKeyUp(ev) {
    KEYSTATE[ev.keyCode] = false;
}

/*************************************************/
function loadResources() {
    // Load images, sounds, etc.

    //spriteList = jgl.newSpriteList();

    //var jetImage = new Image();
    //jetImage.src = "images/jet.png";

    /* Example of loading and defining an animated sprite
    var explosionImg = jgl.newImage("./images/explosion.png", function() {
        explSprite = spriteList.newSprite({
            id: 'explosion',
            width: 88, height: 90,
            image: explosionImg,
            animate: true,
            autoLoop: false,
            autoDeactivate: true,
            currentFrame: 0,
            startFrame: 0,
            endFrame: 39,
            active: false
        });

        // Define animation frames
        for (var frame = 0; frame < 40; frame++) {
            explSprite.setAnimFrame(frame, explosionImg, frame * 88, 0, 88, 90);
        }
        explSprite.setHotSpot(44, 44);
    });
    */

}

/*************************************************/
function gameLoop() {
    window.requestAnimationFrame(gameLoop);

    // Update sprites

    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,640,480);
    ctx.fillStyle = "#00AA00";
    ctx.fillText("Canvas Text", parseInt(Math.random() * 400), parseInt(Math.random() * 470));

    // Redraw sprites
    //spriteList.drawSprites(ctx);

    // Draw images
    //ctx.drawImage(jet, 0, 0);

}

