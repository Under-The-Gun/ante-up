/* eslint-disable no-unused-vars */
// FRONT END SOCKET 
const socket = require('socket.io-client')('http://localhost:7890');
const { firstHandPrompt, playerTurnPrompt, playerOutOfTurnPrompt } = require('./tablePrompts');
const color = require('colors');
const { startAppPrompt } = require('./startApp');

socket.on('disconnect', function() {
  socket.emit('disconnect');
});
socket.on('connect', () => {
  console.log('You\'re connected'.rainbow.bold, socket.id);
  startAppPrompt(socket)
    .then(data => {
      console.log('HEllllooooooooo');
      socket.emit('get-user-count', data);
      socket.on('dealer-options', () => {
        firstHandPrompt(socket);
      });
      socket.on('out-of-turn-options', () => {
        playerOutOfTurnPrompt(socket);
      });
    }).catch();
});
socket.on('player-joined-table', () => {
  //if first player at table give dealer prompt
  console.log('socket on player joined hit');
  // else give out of turn prompt
});



