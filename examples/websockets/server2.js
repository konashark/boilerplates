var io = require('socket.io')();

io.on('connection', function (socket) {
    socket.on('message', function () { });
    socket.on('disconnect', function () { });
});