var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var kordinatner = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(8080);



io.on('connection', function (socket) {
   for(var i in kordinatner) {
     io.sockets.emit("gciq", kordinatner[i]);
   }
   socket.on("kordinat", function (data) {
         kordinatner.push(data);
         io.sockets.emit("gciq",data);
   })
   
});
