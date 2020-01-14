const socket = require('socket.io-client')('http://localhost:7890');
const { pokerApp } = require('./startApp');


socket.on('disconnect', function() {
  socket.emit('disconnect');
});

socket.on('connect', () => {
    .then(signup => {
      socket.emit('signUp', signup);

    });
});

// const { playerTurnPrompt } = require('./tablePrompts');

// playerTurnPrompt();
