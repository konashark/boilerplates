var server = require('websocket').server, http = require('http');

var socket = new server({
    httpServer: http.createServer().listen(1337)
});

var clients = [];

socket.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    console.log('Connection created.');
    clients.push(connection);

    connection.on('message', function(message) {
        console.log(message.utf8Data);
        clients.forEach (function(item, index) {
            item.sendUTF(message.utf8Data);
        });
    });

    connection.on('close', function(connection) {
        console.log('connection closed');
        var index = clients.indexOf(connection);
        if (index > -1) {
            clients.splice(index, 1);
        }
    });

    /*
     socket.OnMessage = () ⇒ {
     foreach (var client in clients) {
     // Send the message to everyone!
     // Also, send the client connection's unique identifier in order
     // to recognize who is who.
     client.Send(client.ConnectionInfo.Id + " says: " + message);
     }
     };
     */
}); 