// REALTIME FUN w/ SOCKET.IO and D3

var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.sendFile('index.html',{root:__dirname});
});


io.on('connection', function(socket){

  socket.on('chat message',function(msg){
    io.emit('chat message',msg);
  });

  socket.on('mouse', function(msg){
    var data = JSON.parse(msg);
    io.emit('mouse',msg);
  });

  socket.on('disconnect', function() {
  });

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});