var net = require("net");

var port = Number(process.argv[2]);

var server = net.createServer();

server.on("connection", function(socket) {
  socket.write(new Date() + "\n");
  socket.end();
});

server.listen(port);


// net.createServer(socket => {
//   socket.end(new Date() + "\n");
// }).listen(port);
