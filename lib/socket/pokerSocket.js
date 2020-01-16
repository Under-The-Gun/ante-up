const User = require('../model/User');
const GameState = require('../utils/gameState');

const gameState = new GameState();
gameState.reshuffle();

module.exports = (io, socket) => {
  socket.on('signup', async(user) => {
    // hit user route and create user
    try {
      await User.create(user);
        
      socket.emit('sign-up-successful', user);
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
  socket.on('disconnect', () => {
    //remove player from game state on disconnect and inform client of diconnected player
    // Down the road remove the user gameState.users = gameState.users.filter(user => user.id !== socket.id);
    io.emit('user-disconnected', socket.id);
  });
  socket.on('player-readied-up', () => {
    console.log('playersReadiedUp', socket.id);
    gameState.readiedUp.push(socket.id);
    console.log(gameState.readiedUp);
    if(gameState.readiedUp.length === Object.keys(gameState.users).length) {
      socket.emit('players-ready');
    } else socket.emit('waiting-for-ready');
  });
  socket.on('get-user-count', () => {
    // Eventually this will change to current player pointer in gameState
    console.log(Object.keys(gameState.users).length);
    if(Object.keys(gameState.users).length === 1) {
      socket.emit('dealer-options');
    } else socket.emit('dealer-options');
  });
  
  socket.on('deal-player-cards', () => {
    gameState.dealCards();
    // Emit the two hold cards to each user and the board cards to the io
    Object.keys(gameState.users).forEach(socketId => {
      io.to(`${socketId}`).emit('your-cards', { holdCards: gameState.hands[socketId] });
    });
    io.emit('game-board-cards', gameState.board);
    // Emit the winners
    io.emit('winning-data', gameState.solveHands());
    // Shuffle a new deck
    gameState.reshuffle();
  });
};
