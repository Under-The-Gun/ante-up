const User = require('../model/User');
const GameState = require('../utils/gameState');

const gameState = new GameState();

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
          gameState.users[socket.id] = user;
          socket.broadcast.emit('user-connected', gameState.users[socket.id].username);
          socket.emit('login-successful');
        });
    }
    catch(err) {
      socket.emit('login-unsuccessful');
    }
  });
  
  socket.on('your-hold-cards', () => {
    // deal out the cards to get ready for the game
    gameState.dealCards();

    // Emit the two hold cards to each user and the board cards to the io
    Object.keys(gameState.users).forEach(socketId => {
      io.to(`${socketId}`).emit('your-hold-cards', { holdCards: gameState.hands[socketId] });
    });

    io.emit('game-board-cards', gameState.board);

    // Emit the winners
    io.emit('winning-data', gameState.solveHands());

    // Shuffle a new deck

  });
};
