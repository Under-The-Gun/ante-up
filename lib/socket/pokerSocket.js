const { newDeck, shuffle } = require('../deck/deck');
const exampleDeck = newDeck();
shuffle(exampleDeck);

const users = {};

module.exports = (io, socket) => {
  socket.on('signUp', (user) => {
    // hit user route and create user
    socket.emit('/api/auth/signup', user.name, user.password);
    users[socket.id] = user;
    socket.broadcast.emit('user-connected', user.name);
  });
  
  socket.on('logIn', (user) => {
    // hit user route and create user
    socket.emit('/api/auth/login', user.name, user.password);
    users[socket.id] = user;
    socket.broadcast.emit('user-connected', user.name);
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
