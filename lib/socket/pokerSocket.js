const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = newDeck();
const User = require('../model/User');
shuffle(exampleDeck);

const users = {};

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
    // let numberOfClients = Object.keys(users).length;
    // if(exampleDeck.length < 2) exampleDeck = shuffle(newDeck(), 1000);
    Object.keys(users).forEach(socketId => {
      let handArray = [exampleDeck.pop(), exampleDeck.pop()];
      socket.broadcast.to(socketId).emit('your-hold-cards', { holdCards: handArray });            
    });
  });
  
};
