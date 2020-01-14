const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = shuffle(newDeck());

module.exports = (io, socket) => {
  socket.on('INPUT_ENTRY', () => {
    let popped = [exampleDeck.pop(), exampleDeck.pop()];

    console.log('Input received');
    socket.emit('You sent some input!');
    socket.broadcast.emit('I sent some input!');
    io.emit(popped);
  });
};
