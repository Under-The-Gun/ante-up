const socket = require('socket.io-client')('http://localhost:7890');
const { firstHandPrompt, playerTurnPrompt } = require('./tablePrompts');
const { logInPrompt } = require('./userLoginSignUp');
const { startAppPrompt } = require('./startApp');

socket.on('disconnect', function() {
  socket.emit('disconnect');
});

socket.on('connect', () => {
  console.log('You\'re connected', socket.id);
  startAppPrompt();
});



