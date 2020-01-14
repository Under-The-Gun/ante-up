const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = shuffle(newDeck());

module.exports = (io, socket) => {
  socket.on('input', (data) => {
    let popped = [exampleDeck.pop(), exampleDeck.pop()];
    socket.emit('You sent some input!');
    io.emit('input', popped);
  });

  io.on('disconnect', (data) => {
    console.log('Someone disconnected');
  });
};
