const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = newDeck();
shuffle(exampleDeck, 1000);
console.log(exampleDeck);
module.exports = (io, socket) => {
  socket.on('userChoice', (data) => {
      
    let popped = [exampleDeck.pop(), exampleDeck.pop()];
    socket.emit('dealCards', popped);
  });

  io.on('disconnect', (data) => {
    console.log('Someone disconnected');
  });
};
