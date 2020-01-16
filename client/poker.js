const socket = require('socket.io-client')('http://localhost:7890');
const { firstHandPrompt, playerTurnPrompt, playerOutOfTurnPrompt } = require('./tablePrompts');
const { startAppPrompt } = require('./startApp');

socket.on('connect', () => {
  console.log('You\'re connected', socket.id);
  const start = () => startAppPrompt(socket)
    .then(data => {
      socket.emit('get-user-count', data);
      socket.on('dealer-options', () => {
        firstHandPrompt(socket).then(() => {
          socket.emit('your-hold-cards');
        });
      });
      socket.on('out-of-turn-options', () => {
        playerOutOfTurnPrompt(socket);
      });
    }).catch(() => {
      start();
    });
  start();
});
socket.on('your-hold-cards', (data) => {
  console.log(data);
});
socket.on('game-board-cards', (data) => {
  console.log(data);
});
socket.on('winning-data', (data) => {
  console.log(data);
});
socket.on('player-joined-table', () => {
  //if first player at table give dealer prompt
  console.log('socket on player joined hit');
  // else give out of turn prompt
});



