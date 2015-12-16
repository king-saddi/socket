var express = require('express');
var app = express();
var http = require('http').Server(app);
var serveStatic = require('serve-static');
var io = require('socket.io')(http);


var port = 3000;
app.set('port', process.env.PORT || port);

app.use(serveStatic(__dirname + '/public'));


io.on('connection', function(socket){
  console.log('User ' + socket.id +' connected.');
    
    
  socket.on('message', function(msg){
    console.log(msg);  
    io.emit('message', msg);
  });
    
});


http.listen(app.get('port'), function() {
   console.log('Listening on port %s', app.get('port'));
});
