var G = {};     // Namespace for app's global variables

requirejs.config({
    baseUrl: './',
    paths: {
        app: '../app',
        "text": "./libs/text"
    }
});

// This file kicks off the Require.js mechanism.

requirejs(['./js/main'], function (MAIN) {
    console.log('Initialize MAIN ...');
    MAIN.init();
});
