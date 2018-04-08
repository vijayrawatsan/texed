var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('newValue', function(msg){
    console.log('message: ' + msg);
  });
});
    

http.listen(3300, function(){
  console.log('listening on *:3300');
});
