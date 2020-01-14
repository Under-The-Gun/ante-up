const socket = require('socket.io-client')('http://localhost:7890');
const { firstHandPrompt, playerTurnPrompt } = require('./tablePrompts');
socket.on('disconnect', function() {
  socket.emit('disconnect');
});
socket.on('connect', () => {
  console.log('You\'re connected', socket.id);
  firstHandPrompt().then(answer => {
    socket.emit('your-hold-cards', { answer });
  });
    
});
socket.on('your-hold-cards', (data) => {
  console.log('recieved cards', data);
});
