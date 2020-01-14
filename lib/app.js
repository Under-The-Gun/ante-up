const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const pokerSocket = require('./socket/pokerSocket');

io.on('connection', function(socket) {
    pokerSocket(io, socket);
  socket.broadcast.on('deal-hands', data => console.log(data));
  console.log('new connection', socket.id);
});

// // app.use('/api/v1/RESOURCE', require('./routes/resource'));

// app.use(require('./middleware/not-found'));
// app.use(require('./middleware/error'));

module.exports = server;
