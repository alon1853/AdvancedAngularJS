var socket = require('socket.io');
var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

  server.listen(3001);

io.sockets.on('connection', function(client) {
  console.log('Client connected, sending message');

  client.emit('messages', {data: 'world'})
});