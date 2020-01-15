const { newDeck, shuffle } = require('../deck/deck');
let exampleDeck = newDeck();
const User = require('../model/User');
shuffle(exampleDeck);

const users = {};
let gameState = {
  hands: {},
  board: {}
};

module.exports = (io, socket) => {
  socket.on('signup', async(user) => {
    // hit user route and create user
    try {
      await User
        .create(user)
        .then(user => {
          console.log(user);
          socket.emit('sign-up-successful');
        });
    }
    catch(err) {
      socket.emit('sign-up-unsuccessful');
    }
    socket.emit('signup-login');
  });
  
  socket.on('login', async(user) => {
    try {
      await User
        .authorize(user)
        .then(user => {
          users[socket.id] = user;
          socket.broadcast.emit('user-connected', users[socket.id].username);
          socket.emit('login-successful');
        });
    }
    catch(err) {
      socket.emit('login-unsuccessful');
    }
  });
  
  socket.on('your-hold-cards', () => {
    Object.keys(users).forEach(socketId => {
      // Declare a hand and assign in state
      const hand = { cardOne: exampleDeck.pop(), cardTwo: exampleDeck.pop() };
      gameState.hands[socketId] = hand;
    });

    // For each user, emit to their socket their hand from gamestate
    Object.keys(users).forEach(socketId => {
      io.to(`${socketId}`).emit('your-hold-cards', { holdCards: gameState.hands[socketId] });
    });

    // Declare five public cards, assign in state, and emit to all players
    let boardCards = { cardThree: exampleDeck.pop(), cardFour: exampleDeck.pop(), cardFive: exampleDeck.pop(), cardSix: exampleDeck.pop(), cardSeven: exampleDeck.pop() };

    gameState.board = boardCards;

    io.emit('game-board-cards', boardCards);
    exampleDeck = shuffle(newDeck(), 1000);
    console.log(gameState);
  });
  
};
