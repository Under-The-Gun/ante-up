const User = require('../model/User');
const GameState = require('../utils/gameState');

const gameState = new GameState();
gameState.reshuffle();

const checkReadiedPlayers = (gameState, socket) => {
  if (gameState.readiedUp.length === Object.keys(gameState.users).length) {
    // gameState.inLobby = false;
    socket.emit('players-ready');
    console.log('all players are ready');
  } else socket.emit('waiting-for-ready');
};

module.exports = (io, socket) => {
  socket.on('signup', async (user) => {
    console.log('signup req with: ', user);
    // hit user route and create user
    try {
      await User.create(user)
        .then(newUser => {
          socket.emit('sign-up-successful', newUser);
        });
    }
    catch (err) {
      console.log('in catch block!');
      socket.emit('sign-up-unsuccessful', 'Username taken, please try again!');
    }
    socket.emit('signup-login');
  });

  socket.on('login', async (user) => {
    try {
      await User
        .authorize(user)
        .then(user => {
          gameState.users[socket.id] = user;
          socket.broadcast.emit('user-connected', gameState.users[socket.id].username);
          socket.emit('login-successful');
          console.log('in user');
        });
    }
    catch (err) {
      console.log('in catch');
      socket.emit('login-unsuccessful', 'Invalid username or password!');
    }
  });
  socket.on('disconnect', () => {
    console.log('disconnected socket', socket.id);
    delete gameState.users[socket.id];
    gameState.readiedUp = gameState.readiedUp.filter(socketId => socketId !== socket.id);
    console.log('on disconnect', gameState.users);
    if (gameState.inLobby) {
      console.log('if statement hit');
      checkReadiedPlayers(gameState, socket);
    }
    console.log(gameState.readiedUp);
    io.emit('user-disconnected', socket.id);
  });
  socket.on('player-readied-up', () => {
    console.log('playersReadiedUp', socket.id);
    gameState.readiedUp.push(socket.id);
    console.log(gameState.readiedUp);
    checkReadiedPlayers(gameState, socket);
  });
  socket.on('get-user-count', () => {
    // Eventually this will change to current player pointer in gameState
    console.log(Object.keys(gameState.users).length);
    if (Object.keys(gameState.users).length === 1) {
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
