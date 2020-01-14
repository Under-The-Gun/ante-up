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
        .findOne(user.username)
        .authorize()
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
};
