const express = require('express');
const app = express();

app.use(express.json());

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use('/api/v1/user', require('./routes/user'));

// app.get('/', (req, res) => {
// res.end('Up and running');
// });

// const createRoom = require('./lib/createRoom');

// io.on('connection', function(socket) {
//   createRoom(io, socket);
// });

// app.use('/api/v1/RESOURCE', require('./routes/resource'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


module.exports = app;
