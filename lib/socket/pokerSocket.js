const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = newDeck();
const User = require('../model/User');
shuffle(exampleDeck);

const users = {};

module.exports = (io, socket) => {
  socket.on('signup', (user) => {
    // hit user route and create user
    User
      .create(user)
      .then(user => {
        console.log(user);
        socket.emit('sign up successful');
      });
    users[socket.id] = user;
    socket.broadcast.emit('user-connected', user.username);
  });
  
  socket.on('login', (user) => {
    // hit user route and create user
    console.log('it works sort of!');
    console.log(user);

    User
      .find(user);
    socket.emit('sign up successful');
    users[socket.id] = user;
    socket.broadcast.emit('user-connected', user.username);
  });
  
  socket.on('disconnect', () => {
    // hit user route and create user
    socket.broadcast.emit('user-disconnected', users[socket.id].name);
    delete users[socket.id].name;
  });
  
  socket.on('userChoice', (data) => {
    let popped = [exampleDeck.pop(), exampleDeck.pop()];
    socket.broadcast.emit('deal-hands', popped);
  });

  //   socket.on('request-cards', () => {
  //     // hit user route and create user
  //   });

  //   socket.on('see-table', () => {
  //     // hit user route and create user
  //   });

//   socket.on('global-chat', (message) => {
//     socket.broadcast.emit('global-chat', { message: message, name: users[socket.id].name });
//   });
};
